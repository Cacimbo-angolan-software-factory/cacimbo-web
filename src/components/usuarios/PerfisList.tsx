import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getPerfis } from '../../redux/userFeatures/usersSlice';
import { PerfisContainer, PerfisListContainer, TopDiv } from './usuariosStyles';
import { IoArrowBackOutline } from 'react-icons/io5';

interface Props {
  setOpenPerfis: (openPerfis: boolean) => void;
}

const PerfisList: React.FC<Props> = ({ setOpenPerfis }) => {
  const { perfis, isError, isLoading, user } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPerfis());
  }, [dispatch]);

  return (
    <>
      <TopDiv>
        <button onClick={() => setOpenPerfis(false)}>
          <IoArrowBackOutline />
        </button>
        <h1>Perfis</h1>
      </TopDiv>

      <PerfisContainer>
        {perfis.map((perfil: any) => (
          <PerfisListContainer key={perfil.id}>
            <h1>{perfil.perfil}</h1>
            <h3>
              {perfil.descricaoPerfil === null
                ? 'Sem descricao disponivel'
                : perfil.descricaoPerfil}
            </h3>
          </PerfisListContainer>
        ))}
      </PerfisContainer>
    </>
  );
};

export default PerfisList;
