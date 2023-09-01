import React, { useContext, useEffect, useState } from 'react';

import { H1, SpinnerDiv, Ul, Wrapper } from './modalParceirosStyles';
import { LicContext } from '../../../context';
import Spinner from '../../spinner/Spinner';

interface ModalParceirosProps {
  openModalParceiros: boolean;
  setOpenModalParceiros: React.Dispatch<React.SetStateAction<boolean>>;
  setEmpresaSelected: React.Dispatch<React.SetStateAction<any>>;
}

const ModalParceiros: React.FC<ModalParceirosProps> = ({
  openModalParceiros,
  setOpenModalParceiros,
  setEmpresaSelected,
}) => {
  const { empresas, loadingEmpresas } = useContext(LicContext);

  return (
    <Wrapper className={openModalParceiros ? 'open' : ''}>
      <H1>Escolha um parceiro</H1>
      <div>
        {loadingEmpresas ? (
          <SpinnerDiv>
            <Spinner />
          </SpinnerDiv>
        ) : (
          <Ul>
            {empresas.map((empresa) => {
              return (
                <li
                  key={empresa.id}
                  onClick={() => {
                    setEmpresaSelected(empresa);
                    setOpenModalParceiros(false);
                  }}
                >
                  {empresa.Nome}
                </li>
              );
            })}
          </Ul>
        )}
      </div>
    </Wrapper>
  );
};

export default ModalParceiros;
