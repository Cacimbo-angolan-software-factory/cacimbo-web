import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getPerfis } from '../../redux/userFeatures/usersSlice';
import { PerfisContainer, PerfisListContainer, TopDiv } from './usuariosStyles';
import {
  IoArrowBackOutline,
  IoPencilOutline,
  IoTrashOutline,
  IoAddCircleOutline,
} from 'react-icons/io5';
import SideBarUsuario from './sideBarsUsuarios/SideBarUsuario';
import PerfisSideBarContainer from './sideBarsUsuarios/PerfisSideBarContainer';

interface Props {
  setOpenPerfis: (openPerfis: boolean) => void;
}

const PerfisList: React.FC<Props> = ({ setOpenPerfis }) => {
  const { perfis, isError, isLoading, user } = useSelector(
    (state: any) => state.user
  );
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('create');
  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);

  useEffect(() => {
    dispatch(getPerfis());
  }, [dispatch]);

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

  const handleOpenCreate = () => {
    setOpen(true);
    setActiveTab('create');
  };

  const handleOpenEdit = () => {
    setOpen(true);
    setActiveTab('edit');
  };

  return (
    <>
      <TopDiv>
        <h1>Perfis</h1>
        <span onClick={handleOpenCreate}>
          <IoAddCircleOutline />
        </span>
      </TopDiv>

      <PerfisContainer>
        {perfis.map((perfil: any) => (
          <PerfisListContainer key={perfil.id}>
            <div>
              <h1>{perfil.perfil}</h1>
              <h3>
                {perfil.descricaoPerfil === null
                  ? 'Sem descricao disponivel'
                  : perfil.descricaoPerfil}
              </h3>
            </div>

            <div>
              <IoPencilOutline onClick={handleOpenEdit} />
              <IoTrashOutline />
            </div>
          </PerfisListContainer>
        ))}
      </PerfisContainer>

      {open && (
        <SideBarUsuario menuRef={menuRef}>
          <PerfisSideBarContainer
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </SideBarUsuario>
      )}
    </>
  );
};

export default PerfisList;
