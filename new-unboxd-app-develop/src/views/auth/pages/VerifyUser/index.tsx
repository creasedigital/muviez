import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  AuthDescriptionFooter,
  AuthDescriptionHeader,
  Form,
  Main,
  MainContainer,
  Resend,
} from './styles';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { MarketingLayout as Layout } from '../../../../layout';
import { verifyUser, sendEmail } from './redux/actions';
import { SpaceBetweenHeader } from '../../../../commons/UtilityStyles/Flex';
import Footer from '../../../../components/Footer';
import Logo from '../../../../components/Logo';
import { ReactComponent as LargeHeart } from '../../../../assets/img/illustrations/heart-large.svg';
import { ReactComponent as SmallHeart } from '../../../../assets/img/illustrations/heart-small.svg';
import { GlobalStoreState } from '../../../../store/types';
import { SET_STEP } from './redux/types';

import * as V from '../../../../utils/veem';

const VerifyUser = () => {
  const { authenticated, verifyEmail } = useSelector(
    (state: GlobalStoreState) => state.user
  );
  
  const { step, email } = useSelector(
    (state: GlobalStoreState) => state.verifyUser
  );
  const history = useHistory();

  if (authenticated) history.push('/dashboard');
  const dispatch = useDispatch();

  const userEmail = V.isObjEmpty(email) ? verifyEmail : email;

  const [values, setValues] = useState({
    userEmail,
    type: 'register ',
    otp: '',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const resendOtp = async () => {
    const payload = { email: values.userEmail.toLowerCase(), type: values.type };
    try {
      await dispatch(sendEmail(payload));
    } catch (error) {}
  };

  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const payload = { email: values.userEmail.toLowerCase(), type: values.type };
    try {
      await dispatch(sendEmail(payload));
      dispatch({ type: SET_STEP });
      setLoading(false);
    } catch (error) {}
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    //your client side validation here
    //after success validation
    const payload = { ...values, email: values.userEmail.toLowerCase() };
    await dispatch(verifyUser(payload, history));
    setLoading(false);
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
              <h2>Please Verify Account</h2>
            </SpaceBetweenHeader>
            {step === 1 && (
              <Form onSubmit={handleSendEmail}>
                <Input
                  label="Email address"
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={values.userEmail}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
                <Button type="submit" loading={loading} disabled={loading}>
                  Continue
                </Button>
              </Form>
            )}
            {step === 2 && (
              <Form onSubmit={handleSubmit}>
                <Input
                  label="OTP"
                  type="number"
                  name="otp"
                  id="otp"
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
                <Button type="submit" loading={loading} disabled={loading}>
                  Verify Account
                </Button>
                {email && (
                  <Resend>
                    <p onClick={resendOtp}>Resend Otp</p>
                  </Resend>
                )}
              </Form>
            )}
          </div>
        </Main>
        <Footer />
      </Layout>
    </MainContainer>
  );
};

export default VerifyUser;
