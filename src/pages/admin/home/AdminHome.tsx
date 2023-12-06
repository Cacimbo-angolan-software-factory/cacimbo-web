import React, { useState } from 'react';
import Animation from '../../../components/Admin/backAnimation/Animation';
import Notifications from '../../../components/Admin/notifications/Notif';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Section, Title } from './styles';
import { useSelector } from 'react-redux';

const AdminHome: React.FC = () => {
  const { user } = useSelector((state: any) => state.user);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <>
        <Title>Bem-vindo de volta, {user.user.name}!</Title>
        <Section>
          <Notifications />
          <Animation />
        </Section>
      </>
    </>
  );
};

export default AdminHome;
