import React, { useContext, useState, useRef, useEffect } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import CriarEmpresa from '../../../components/empresa/criarEmpresa/CriarEmpresa';
import Empresa from '../../../components/empresa/Empresa';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import Sidebar from '../../../components/sidebar/SideBar';
import Spinner from '../../../components/spinner/Spinner';
import { LicContext } from '../../../context';

import { Container } from './stylesEmpresas';

const Empresas: React.FC = () => {
  const { empresas, licences, setEditar, loadingEmpresas } =
    useContext(LicContext);
  const [open, setOpen] = useState(false);
  const [criarEmpresa, setCriarEmpresa] = useState(false);
  const [empresaSelected, setEmpresaSelected] = useState<any>();
  let menuRef = useRef<any>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setEditar && setEditar(null);
  };

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const licencasDeParceiro = licences.filter((licence) => {
    return licence.parceiro_id === empresaSelected?.id;
  });

  const handleCreate = () => {
    setCriarEmpresa(true);
  };

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <BtnCreate
        style={{
          display: criarEmpresa ? 'none' : 'flex',
        }}
        onClick={handleCreate}
      >
        Criar parceiro
      </BtnCreate>

      {criarEmpresa ? (
        <CriarEmpresa setCriarEmpresa={setCriarEmpresa} />
      ) : (
        <Container>
          {empresas &&
            empresas.map((empresa: any) => (
              <Container key={empresa.id}>
                <Empresa
                  handleClick={handleClick}
                  setEmpresaSelected={setEmpresaSelected}
                  empresa={empresa}
                />
              </Container>
            ))}
        </Container>
      )}

      {open && (
        <Sidebar
          menuRef={menuRef}
          licencas={licencasDeParceiro}
          empresaSelected={empresaSelected}
          handleClose={handleClose}
        />
      )}
      <ScrollTop />

      {loadingEmpresas && <Spinner />}
    </>
  );
};

export default Empresas;
