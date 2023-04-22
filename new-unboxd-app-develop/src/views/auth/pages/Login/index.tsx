import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  AuthDescriptionFooter,
  AuthDescriptionHeader,
  Form,
  Main,
  MainContainer,
} from './styles';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { MarketingLayout as Layout } from '../../../../layout';
import { loginUser } from './redux/actions';
import { SpaceBetweenHeader } from '../../../../commons/UtilityStyles/Flex';
import { Auth } from '../../../../components/Header/styles';
import Footer from '../../../../components/Footer';
import Logo from '../../../../components/Logo';
import { ReactComponent as LargeHeart } from '../../../../assets/img/illustrations/heart-large.svg';
import { ReactComponent as SmallHeart } from '../../../../assets/img/illustrations/heart-small.svg';
import { GlobalStoreState } from '../../../../store/types';
import ResetLink from '../../../../components/ResetLink';

const Login = () => {
  const { loading, authenticated } = useSelector(
    (state: GlobalStoreState) => state.user
  );
  const history = useHistory();

  if (authenticated) history.push('/dashboard');
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //your client side validation here
    //after success validation
    const userData = {
      email: values.email.toLowerCase(),
      password: values.password,
    };
    await dispatch(loginUser(userData, history));
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
              <h2>Sign in</h2>
              <Auth>
                New here? <Link to="/register">Sign up</Link>
              </Auth>
            </SpaceBetweenHeader>
            <Form onSubmit={handleSubmit}>
              <Input
                label="Email address"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                disabled={loading}
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
              <Button
                type="submit"
                loading={loading || undefined}
                disabled={loading}
              >
                Sign in
              </Button>
            </Form>
            <ResetLink />
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

export default Login;
