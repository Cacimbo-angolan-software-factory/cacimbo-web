import React from 'react';

import { Container, Details } from './styles';

interface IProps {
  licence: {
    id: number;
    cliente_nome: string;
    data_emissao: string;
    data_validade: string;
  };
}

const Licence: React.FC<IProps> = (licence) => {
  return (
    <Container>
      <h2>{licence.licence.cliente_nome}</h2>
      <Details>
        <p>id: {licence.licence.id}</p>
        <p>
          {licence.licence.data_emissao} &gt; {licence.licence.data_validade}
        </p>
      </Details>
    </Container>
  );
};

export default Licence;
