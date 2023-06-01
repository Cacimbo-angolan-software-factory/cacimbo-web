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
    lic_string?: string;
  };
}

const Licence: React.FC<IProps> = ({ licence }) => {
  function downloadTxtFile(content: any, filename: string) {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const fullFilename = `${filename}.lic`
      .normalize('NFD')
      .replace(/[^a-zA-Zs]/g, '')
      .replace(/ /g, '_');
    element.href = URL.createObjectURL(file);
    element.download = fullFilename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const handleClick = () => {
    const content = licence.lic_string;
    const filename = licence.cliente_nome;
    downloadTxtFile(content, filename);
  };

  return (
    <Container>
      <div>
        <h2>{licence.cliente_nome}</h2>
        <Details>
          <p>id: {licence.id}</p>
          <p>
            {licence.data_emissao} &gt; {licence.data_validade}
          </p>
        </Details>
      </div>

      <button onClick={handleClick}>
        <IoCloudDownloadOutline size={20} />
      </button>
    </Container>
  );
};

export default Licence;
