import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../../../layout';
import { Button, Input } from '../../../../components';
import { ContentWrapper, SectionSeparator } from '../Dashboard/styles';
import { ReactComponent as BackArrowIcon } from '../../../../assets/img/icons/backArrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { API } from '../../../../utils/api';
import { SET_USER } from '../../../auth/pages/Login/redux/types';
import { getUserData } from '../../../auth/pages/Login/redux/actions';
import * as services from '../../services';
import { GoBack } from '../Wallet/styles';
import toast from 'react-hot-toast';

const Settings: React.FC<any> = () => {
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const [uloading, setULoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  const localUser = localStorage.getItem('username');

  const [values, setValues] = useState({
    email: 'user@unboxd.gifts',
    username: 'username',
    oldPassword: '',
    newPassword: '',
    otp: '',
  });

  useEffect(() => {
    if (credentials) {
      setValues((prev) => ({
        ...prev,
        email: credentials.email,
        username: credentials.username || (localUser as string),
      }));
    }
  }, [credentials, localUser]);

  useEffect(() => {
    if (!credentials) {
      dispatch(getUserData());
    }
  }, [credentials, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const changeUsername = async (e: any) => {
    e.preventDefault();
    setULoading(true);

    const payload = { username: values.username };

    try {
      if (values.username !== credentials.username) {
        const res = await API.put(`/user/update/${credentials._id}`, payload);
        dispatch({ type: SET_USER, payload: res.data.payload });
        setULoading(false);
        toast.success('Successfully changed your username');
      }
    } catch (error) {}
  };

  const handleSubmit = async (event: React.SyntheticEvent, step: number) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (step === 1) {
        if (values.oldPassword === values.newPassword) {
          toast('Your old password cannot be same as new password');
          setLoading(false);
          return;
        }

        const payload = {
          email: values.email,
          oldPassword: values.oldPassword,
        };

        await services.verifyPassword(payload);
        setStep(2);
        setLoading(false);
      } else {
        const payload = { ...values };
        await services.changePassword(payload);
        setStep(1);
        setLoading(false);
      }
    } catch (error) {}
  };

  return (
    <DashboardLayout hideWalletSection>
      <ContentWrapper>
        <form onSubmit={changeUsername}>
          <Input
            type="email"
            name="email"
            value={values.email}
            label="Email Address"
            disabled
            isEdit
          />
          <Input
            type="text"
            name="username"
            value={values.username}
            label="Username"
            disabled
            showCallToAction
            isEdit
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />

          <Button type="submit" loading={uloading} disabled={uloading}>
            Save Username
          </Button>
        </form>
        <SectionSeparator />
        <form onSubmit={(event) => handleSubmit(event, step)}>
          {step === 1 && (
            <>
              <Input
                type="password"
                name="oldPassword"
                label="Old Password"
                showCallToAction
                isPassword
                onChange={handleChange}
              />
              <Input
                type="password"
                name="newPassword"
                label="New Password"
                showCallToAction
                isPassword
                onChange={handleChange}
              />
            </>
          )}
          {step === 2 && (
            <>
              <GoBack onClick={() => setStep(1)}>
                <BackArrowIcon />
              </GoBack>
              <Input
                type="text"
                name="otp"
                label="OTP"
                onChange={handleChange}
              />
            </>
          )}
          <Button type="submit" loading={loading} disabled={loading}>
            {step === 1 ? 'Change Password' : 'Verify Change'}
          </Button>
        </form>
      </ContentWrapper>
    </DashboardLayout>
  );
};

export default Settings;
