import React from 'react';

import { LojaContainer } from './lojasStyles';

interface Props {
  loja: any;
}

const Loja: React.FC<Props> = ({ loja }) => {
  return (
    <LojaContainer>
      <img src={loja.StoreLogoUrl} alt='loja' />
      <div>
        <h1>{loja.StoreName}</h1>
        <p>{loja.StoreSlogan}</p>
      </div>
    </LojaContainer>
  );
};

export default Loja;
