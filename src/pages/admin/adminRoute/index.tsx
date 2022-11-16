import React from 'react';
import Animation from '../../../components/Admin/backAnimation/Animation';
import Notifications from '../../../components/Admin/notifications/Notif';
import { Section } from './styles';

const AdminIndex: React.FC = () => {
  return (
    <>
      <Section>
        <Notifications />
        <Animation />
      </Section>
    </>
  );
};

export default AdminIndex;
