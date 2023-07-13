import React from 'react';

import { Wrapper } from './stylesAcessoEmpresas';

interface IModalAcessoEmpresas {
  openModalEmpresas: boolean;
}

const ModalAcessoEmpresas: React.FC<IModalAcessoEmpresas> = ({
  openModalEmpresas,
}) => {
  return (
    <Wrapper className={openModalEmpresas ? 'open' : ''}>
      <h1>ModalAcessoEmpresas</h1>
    </Wrapper>
  );
};

export default ModalAcessoEmpresas;
