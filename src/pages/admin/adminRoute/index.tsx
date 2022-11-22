import React, { useState } from 'react';
import Animation from '../../../components/adminHome/backAnimation/Animation';
import BottomNav from '../../../components/adminHome/bottomNav/bottomNav';
import Notifications from '../../../components/adminHome/notifications/Notif';
import { Section } from './styles';

const AdminIndex: React.FC = () => {
  const [fixedNav, setFixedNav] = useState(false);

  function onScroll() {
    if (window.scrollY >= -309) {
      setFixedNav(true);
      console.log(window.scrollY);
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
