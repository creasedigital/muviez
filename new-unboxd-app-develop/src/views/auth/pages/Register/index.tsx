import { useState } from 'react';
import { Form } from './styles';
import Input from '../../../../components/Input';
import { MarketingLayout as Layout } from '../../../../layout';
import Button from '../../../../components/Button';
import { Link, useHistory } from 'react-router-dom';

import { API } from '../../../../utils/api';

import {
  SpaceBetweenForm,
  SpaceBetweenHeader,
} from '../../../../commons/UtilityStyles/Flex';
import { Auth } from '../../../../components/Header/styles';
import { Footer } from '../../../../components';
import {
  AuthDescriptionFooter,
  AuthDescriptionHeader,
  Main,
  MainContainer,
} from '../Login/styles';
import { ReactComponent as LargeHeart } from '../../../../assets/img/illustrations/heart-large.svg';
import { ReactComponent as SmallHeart } from '../../../../assets/img/illustrations/heart-small.svg';
import Logo from '../../../../components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { SEND_EMAIL, SET_STEP } from '../VerifyUser/redux/types';
import toast from 'react-hot-toast';

const Register = () => {
  const { authenticated } = useSelector(
    (state: GlobalStoreState) => state.user
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    signType: 'direct',
  });
  const [valid, setValid] = useState<boolean>(false);

  if (authenticated) history.push('/dashboard');

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
    if (
      values.firstname &&
      values.lastname &&
      values.email &&
      values.phone &&
      values.password
    ) {
      setValid(true);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setValid(false);

    if (values.phone.length < 11 || values.phone.length > 12) {
      toast.error('Phone Number must be of the number format. Kindly try again');
      setLoading(false);
      setValid(false);
      return;
    }

    if (values.password.length < 8) {
      toast.error('Password should be 8 characters or more');
      setLoading(false);
      setValid(false);
      return;
    }

    const authData = { ...values, email: values.email.toLowerCase() };
    const payload = values.email;

    try {
      const response = await API.post('/auth/signup', authData);

      toast.success(response.data.message + ' - Check your email for OTP');

      setTimeout(() => history.push('/verify-user'), 500);
      dispatch({ type: SEND_EMAIL, payload });
      dispatch({ type: SET_STEP });
      setLoading(false);
    } catch (err: any) {
      const message = err.response.data.message;
      toast.error(message ? message : 'Something happened. Kindly try again');
      if (message === 'account already registered with us') {
        setTimeout(() => history.push('/login'), 500);
      }
      setLoading(false);
      setValid(false);
    }
  };

  return (
    <MainContainer>
      <div className="description">
        <LargeHeart className="large-heart" />
        <SmallHeart className="small-heart" />
        <AuthDescriptionHeader>
          <Link to="/">
            <Logo />
          </Link>
        </AuthDescriptionHeader>
        <AuthDescriptionFooter>
          <h1>Whatever you want</h1>
          <p>
            List it, share it and receive money contributions
            <br /> from your loved ones.
          </p>
        </AuthDescriptionFooter>
      </div>
      <Layout>
        <Main>
          <div className="container">
            <SpaceBetweenHeader align="center">
              <h2>Sign up</h2>
              <Auth>
                Got account? <Link to="/login">Sign in</Link>
              </Auth>
            </SpaceBetweenHeader>

            <Form onSubmit={handleSubmit}>
              <SpaceBetweenForm>
                <Input
                  label="First name"
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Last name"
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={handleChange}
                  required
                />
              </SpaceBetweenForm>

              <Input
                label="Email address"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                required
              />
              <Input
                label="Phone number"
                type="number"
                name="phone"
                id="phone"
                onChange={handleChange}
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                disabled={loading}
                isPassword
                showCallToAction
                required
              />
              <Button loading={loading} disabled={!valid}>
                Create account
              </Button>
            </Form>
            {/* <SocialAuth
                  options={[
                    {
                      text: 'Sign in with Google',
                      onClick: (e) => {
                        console.log(e);
                      },
                      icon: GoogleIcon,
                    },
                    {
                      text: 'Signin with Facebook',
                      onClick: (e) => {
                        console.log(e);
                      },
                      icon: FacebookIcon,
                    },
                  ]}
                /> */}
          </div>
        </Main>
        <Footer />
      </Layout>
    </MainContainer>
  );
};

export default Register;
