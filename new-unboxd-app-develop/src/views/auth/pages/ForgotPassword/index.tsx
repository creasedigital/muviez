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
import {
  verifyUser as changePassword,
  sendEmail,
} from '../VerifyUser/redux/actions';
import {
  FlexTextCenter,
  SpaceBetweenHeader,
} from '../../../../commons/UtilityStyles/Flex';
import { Auth } from '../../../../components/Header/styles';
import Footer from '../../../../components/Footer';
import Logo from '../../../../components/Logo';
import { ReactComponent as LargeHeart } from '../../../../assets/img/illustrations/heart-large.svg';
import { ReactComponent as SmallHeart } from '../../../../assets/img/illustrations/heart-small.svg';
import { GlobalStoreState } from '../../../../store/types';

const ForgotPassword = () => {
  const { authenticated } = useSelector(
    (state: GlobalStoreState) => state.user
  );
  const history = useHistory();

  if (authenticated) history.push('/dashboard');
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    newPassword: '',
    otp: '',
    type: 'password',
  });

  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const payload = { email: values.email, type: values.type };
    try {
      await dispatch(sendEmail(payload));
      setStep(2);
      setLoading(false);
    } catch (error) {}
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    //your client side validation here
    //after success validation
    const payload = { ...values };
    await dispatch(changePassword(payload, history));
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
              <h2>Forgot Password</h2>
            </SpaceBetweenHeader>
            {step === 1 && (
              <Form onSubmit={handleSendEmail}>
                <Input
                  label="Email address"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
                <Button type="submit" loading={loading} disabled={loading}>
                  Send
                </Button>
              </Form>
            )}
            {step === 2 && (
              <Form onSubmit={handleSubmit}>
                <Input
                  label="New Password"
                  type="password"
                  name="newPassword"
                  id="password"
                  onChange={handleChange}
                  disabled={loading}
                  isPassword
                  showCallToAction
                  required
                />
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
                  Change Password
                </Button>
              </Form>
            )}
            <FlexTextCenter>
              <Auth centered>
                Remember Password? <Link to="/login">Sign in</Link>
              </Auth>
            </FlexTextCenter>
          </div>
        </Main>
        <Footer />
      </Layout>
    </MainContainer>
  );
};

export default ForgotPassword;
