import React from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';

import { Container, Details } from './styles';

interface IProps {
  licence: {
    id: number;
    cliente_nome: string;
    data_emissao: string;
    data_validade: string;
    parceiro_id: number;
  };
}

const Licence: React.FC<IProps> = ({ licence }) => {
  return (
    <Container>
      <h2>{licence.cliente_nome}</h2>
      <Details>
        <p>id: {licence.id}</p>
        <p>
          {licence.data_emissao} &gt; {licence.data_validade}
        </p>
      </Details>
    </Container>
  );
};

export default Licence;
