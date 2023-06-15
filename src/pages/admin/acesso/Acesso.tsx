import React from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Container } from './AcessoStyles';
import AcessoTabs from '../../../components/acesso/AcessoTabs';
import AcessoRoles from '../../../components/acesso/acessoRoles/AcessoRoles';
import AcessoCustomRoles from '../../../components/acesso/acessoRoles/AcessoCustomRoles';
import ModalRoles from '../../../components/acesso/modalRoles/ModalRoles';
import { IoAddCircleOutline } from 'react-icons/io5';

const Acesso: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('padrao');
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Container>
        <div className='div'>
          <AcessoTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <button onClick={() => setOpenModal(true)}>
            <IoAddCircleOutline />
            Criar função
          </button>
        </div>

        {activeTab === 'padrao' ? <AcessoRoles /> : <AcessoCustomRoles />}
      </Container>

      <ModalRoles openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Acesso;
