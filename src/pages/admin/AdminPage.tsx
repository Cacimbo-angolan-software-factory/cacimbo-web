import React from 'react';
import Menu from '../../components/menu/Menu';
import Notifications from '../../components/notifications/Notif';
import Stats from '../../components/stats/Stats';
import styled from 'styled-components';

import { AdminContainer } from './styles';
import Animation from '../../components/backAnimation/Animation';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  padding: '32px 6.5rem 0';
  margin: 0;
  /* max-width: 1040px; */
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    padding: 0 24px 0;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
  @media screen and (max-width: 350px) {
    padding: 0;
  }
`;

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
