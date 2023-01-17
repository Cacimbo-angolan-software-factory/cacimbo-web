import React from 'react';
import Menu from './menu/Menu';
import Stats from './stats/Stats';

const AdminHeader: React.FC = () => {
  return (
    <>
      <Stats />
      <Menu />
    </>
  );
};

export default AdminHeader;
