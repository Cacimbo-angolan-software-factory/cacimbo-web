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
import { getPermissions } from '../../../redux/permissionsFeatures/permissionSlice';

const Acesso: React.FC = () => {
  const {
    openModal,
    setOpenModal,
    handleChange,
    showPermissions,
    list,
    isLoading,
    setSearchCompanyId,
    searchCompanyId,
    value,
    errorMsg,
    user,
    setValue,
    setErrorMsg,
    setShowPermissions,
    selectedEmpresa,
    setSelectedEmpresa,
  } = useModalRoles();
  const [openModalEmpresas, setOpenModalEmpresas] = React.useState(false);
  const { rolesList } = useSelector((state: any) => state.permission);
  const { empresasAssociadas } = useSelector((state: any) => state.empresa);
  const dispatch = useDispatch<AppDispatch>();
  const [roleSelected, setRoleSelected] = React.useState<any>();

  useEffect(() => {
    dispatch(getEmpresasAssociadas());
  }, []);

  const rolesDeEmpresas = rolesList.filter((role: any) => {
    return role.companyId === selectedEmpresa?.CompanyID;
  });

  useEffect(() => {
    console.log(selectedEmpresa);
  }, [selectedEmpresa]);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Container>
        <div className='div'>
          <h2>Funções</h2>
          {selectedEmpresa?.CompanyName && (
            <button onClick={() => setOpenModal(true)}>
              <IoAddCircleOutline />
              Criar função
            </button>
          )}
        </div>

        <Button onClick={() => setOpenModalEmpresas(true)}>
          {selectedEmpresa?.CompanyName || 'Selecione uma empresa'}
        </Button>

        <AcessoRoles
          list={list}
          rolesDeEmpresas={rolesDeEmpresas}
          setOpenModal={setOpenModal}
          roleSelected={roleSelected}
          setRoleSelected={setRoleSelected}
        />
      </Container>

      <ModalRoles
        selectedEmpresa={selectedEmpresa}
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleChange={handleChange}
        showPermissions={showPermissions}
        list={list}
        isLoading={isLoading}
        setSearchCompanyId={setSearchCompanyId}
        searchCompanyId={searchCompanyId}
        value={value}
        user={user}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        setValue={setValue}
        roleSelected={roleSelected}
        setShowPermissions={setShowPermissions}
      />
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
