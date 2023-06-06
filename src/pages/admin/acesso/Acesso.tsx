import React from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Container } from './AcessoStyles';
import AcessoTabs from '../../../components/acesso/AcessoTabs';
import AcessoRoles from '../../../components/acesso/acessoRoles/AcessoRoles';
import AcessoCustomRoles from '../../../components/acesso/acessoRoles/AcessoCustomRoles';

// import { Container } from './styles';

const Acesso: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('padrao');

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Container>
        <AcessoTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'padrao' ? <AcessoRoles /> : <AcessoCustomRoles />}
      </Container>
    </>
  );
};

export default Acesso;
