import React, { useState } from 'react';
import Animation from '../../../components/Admin/backAnimation/Animation';
import BottomNav from '../../../components/Admin/bottomNav/BottomNav';
import Permissions from '../../../components/Admin/createPermissions/Permissions';
import CreateUserRole from '../../../components/Admin/createRole/CreateUserRole';
import Notifications from '../../../components/Admin/notifications/Notif';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Section, Title } from './styles';
import { useSelector } from 'react-redux';

const AdminHome: React.FC = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const [criarPermission, setCriarPermission] = useState(false);
  const [criarRole, setCriarRole] = useState(false);
  const { user } = useSelector((state: any) => state.user);

  function onScroll() {
    if (window.scrollY >= -309) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }
  window.addEventListener('scroll', onScroll);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />
      {criarPermission ? (
        <Permissions setCriarPermission={setCriarPermission} />
      ) : criarRole ? (
        <CreateUserRole setCriarRole={setCriarRole} />
      ) : (
        <>
          <Title>Bem-vindo de volta, {user.user.name}!</Title>
          <Section>
            <Notifications />
            <Animation />
          </Section>
          <BottomNav
            setCriarPermission={setCriarPermission}
            setCriarRole={setCriarRole}
            fixedNav={fixedNav}
          />
        </>
      )}
    </>
  );
};

export default AdminHome;
