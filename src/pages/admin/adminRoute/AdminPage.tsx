import React from 'react';
import Menu from '../../../components/menu/Menu';
import Notifications from '../../../components/Admin/notifications/Notif';
import Stats from '../../../components/stats/Stats';
import { Routes, Route } from 'react-router-dom';
import { AdminContainer, Section } from './styles';
import AdminIndex from '.';
import Licenças from '../licenças/Licenças';

const AdminPage: React.FC = () => {
  return (
    <AdminContainer>
      <Stats />
      <Menu />
      <Routes>
        <Route path='/Admin' element={<AdminIndex />} />
        <Route path='/Admin/licenças' element={<Licenças />} />
      </Routes>
    </AdminContainer>
  );
};

export default AdminPage;
