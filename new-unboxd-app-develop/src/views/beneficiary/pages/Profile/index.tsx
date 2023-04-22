import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { DashboardLayout } from '../../../../layout';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { Button, EditProfileImage, Input } from '../../../../components';
import { ContentWrapper } from '../Dashboard/styles';
import { API } from '../../../../utils/api';
import { SET_USER } from '../../../auth/pages/Login/redux/types';
import { getUserData } from '../../../auth/pages/Login/redux/actions';
import toast from 'react-hot-toast';

const Profile: React.FC<any> = () => {
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<{
    file: File | string;
    result: ArrayBuffer | string;
  }>({
    file: '',
    result: credentials?.avatar ?? '/assets/avatar.png',
  });

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (credentials) {
      setData({
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        phone: credentials.phone,
      });
      setProfileImage({ file: '', result: credentials.avatar })
    }
  }, [credentials]);

  useEffect(() => {
    if (!credentials) {
      dispatch(getUserData());
    }
  }, [credentials, dispatch]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);

      if (e.target.files[0].size > 500000) {
        toast('Image size must not be greater than 500KB');
        console.error('Image size must not be greater than 500KB');
        return;
      }

      reader.onloadend = () => {
        setProfileImage({ file: e.target.files![0], result: reader?.result! });
      };
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((data: any) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      let payload;

      if (profileImage.file !== '') {
        payload = new FormData();
        payload.append('firstname', data.firstname);
        payload.append('lastname', data.lastname);
        payload.append('phone', data.phone);
        payload.append('image', profileImage.file);
      } else {
        payload = { ...data };
      }

      const res = await API.put(`/user/update/${credentials._id}`, payload);

      dispatch({ type: SET_USER, payload: res.data.payload });
      setLoading(false);
      toast.success('Successfully updated profile');
    } catch (error) {}
  };

  return (
    <DashboardLayout hideWalletSection>
      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <EditProfileImage
            id="edit-image"
            src={profileImage.result as string}
            onChange={handleImageUpload}
          />
          <SpaceBetween>
            <Input
              label="Firstname"
              name="firstname"
              defaultValue={data.firstname}
              onChange={handleChange}
            />
            <Input
              label="Lastname"
              name="lastname"
              defaultValue={data.lastname}
              onChange={handleChange}
            />
          </SpaceBetween>
          <Input
            label="Phone Number"
            name="phone"
            defaultValue={data.phone}
            onChange={handleChange}
          />
          <Button loading={loading} disabled={loading}>
            Save changes
          </Button>
        </form>
      </ContentWrapper>
    </DashboardLayout>
  );
};

export default Profile;
