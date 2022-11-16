import React from 'react';
import Menu from '../../components/menu/Menu';
import Notifications from '../../components/notifications/Notif';
import Stats from '../../components/stats/Stats';

import { AdminContainer, Section } from './styles';
import Animation from '../../components/backAnimation/Animation';

const AdminPage: React.FC = () => {
  return (
    <AdminContainer>
      <Stats />
      <Menu />
      <Section>
        <Notifications />
        <Animation />
      </Section>
    </AdminContainer>
  );
};

export default AdminPage;
