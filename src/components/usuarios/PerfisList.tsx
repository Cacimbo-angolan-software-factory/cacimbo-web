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

  return (
    <>
      <TopDiv>
        <div>
          <h1>Perfis</h1>
        </div>
        <span onClick={() => setOpen(true)}>
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
              <IoPencilOutline onClick={() => setOpen(true)} />
              <IoTrashOutline />
            </div>
          </PerfisListContainer>
        ))}
      </PerfisContainer>

      {open && (
        <SideBarUsuario menuRef={menuRef}>
          <PerfisSideBarContainer />
        </SideBarUsuario>
      )}
    </>
  );
};

export default PerfisList;
