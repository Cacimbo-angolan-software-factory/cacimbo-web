import React, { useState } from 'react';
import Animation from '../../../components/Admin/backAnimation/Animation';
import BottomNav from '../../../components/Admin/bottomNav/BottomNav';
import Notifications from '../../../components/Admin/notifications/Notif';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import { Section } from './styles';

const AdminHome: React.FC = () => {
  const [fixedNav, setFixedNav] = useState(false);

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

      <Section>
        <Notifications />
        <Animation />
      </Section>
      <BottomNav fixedNav={fixedNav} />
    </>
  );
};

export default AdminHome;
