import React, { useState } from 'react';
import Animation from '../../../components/Admin/backAnimation/Animation';
import BottomNav from '../../../components/Admin/bottomNav/BottomNav';
import Notifications from '../../../components/Admin/notifications/Notif';
import { Section } from './styles';

const AdminIndex: React.FC = () => {
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
      <Section>
        <Notifications />
        <Animation />
      </Section>
      <BottomNav fixedNav={fixedNav} />
    </>
  );
};

export default AdminIndex;
