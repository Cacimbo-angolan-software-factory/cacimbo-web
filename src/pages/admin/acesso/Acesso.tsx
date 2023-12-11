import React, { useEffect } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Button, Container, Overlay } from './AcessoStyles';
import AcessoRoles from '../../../components/acesso/acessoRoles/AcessoRoles';
import ModalRoles from '../../../components/acesso/modalRoles/ModalRoles';
import { IoAddCircleOutline } from 'react-icons/io5';
import ModalAcessoEmpresas from '../../../components/acesso/modalAcessoEmpresas/ModalAcessoEmpresas';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getEmpresasAssociadas } from '../../../redux/empresaFeatures/empresaSlice';
import { useModalRoles } from '../../../components/acesso/modalRoles/useModalRoles';

const Acesso: React.FC = () => {
  const { openModal, setOpenModal } = useModalRoles();
  const [openModalEmpresas, setOpenModalEmpresas] = React.useState(false);
  const { rolesList, isLoading } = useSelector(
    (state: any) => state.permission
  );
  const { empresasAssociadas } = useSelector((state: any) => state.empresa);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedEmpresa, setSelectedEmpresa] = React.useState<any>({});

  useEffect(() => {
    dispatch(getEmpresasAssociadas());
  }, []);

  const rolesDeEmpresas = rolesList.filter((role: any) => {
    return role.companyId === selectedEmpresa?.CompanyID;
  });

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Container>
        <div className='div'>
          <h2>Funções</h2>
          <button onClick={() => setOpenModal(true)}>
            <IoAddCircleOutline />
            Criar função
          </button>
        </div>

        <Button onClick={() => setOpenModalEmpresas(true)}>
          {selectedEmpresa?.CompanyName || 'Selecione uma empresa'}
        </Button>

        <AcessoRoles rolesDeEmpresas={rolesDeEmpresas} />
      </Container>

      <ModalRoles openModal={openModal} setOpenModal={setOpenModal} />
      {openModalEmpresas && (
        <ModalAcessoEmpresas
          empresasAssociadas={empresasAssociadas}
          openModalEmpresas={openModalEmpresas}
          setSelectedEmpresa={setSelectedEmpresa}
          setOpenModalEmpresas={setOpenModalEmpresas}
        />
      )}
      {openModalEmpresas && (
        <Overlay onClick={() => setOpenModalEmpresas(false)} />
      )}
    </>
  );
};

export default Acesso;
