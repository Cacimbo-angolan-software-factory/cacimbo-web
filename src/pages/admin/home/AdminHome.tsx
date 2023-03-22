import React, { useState } from 'react';
import Animation from '../../../components/Admin/backAnimation/Animation';
import BottomNav from '../../../components/Admin/bottomNav/BottomNav';
import Permissions from '../../../components/Admin/createPermissions/Permissions';
import CreateRole from '../../../components/Admin/createRole/CreateRole';
import Notifications from '../../../components/Admin/notifications/Notif';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Section } from './styles';

const AdminHome: React.FC = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const [criarPermission, setCriarPermission] = useState(false);
  const [criarRole, setCriarRole] = useState(false);

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
        <CreateRole setCriarRole={setCriarRole} />
      ) : (
        <>
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
