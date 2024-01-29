import React, { Dispatch, useEffect } from 'react';

import { Main } from './modalClientsStyle';

interface IProps {
  empresasAssociadas: any;
  setEmpresaSelected: Dispatch<any>;
}

const ModalClients: React.FC<IProps> = ({
  empresasAssociadas,
  setEmpresaSelected,
}) => {
  useEffect(() => {
    console.log(empresasAssociadas);
  }, []);

  return (
    <Main>
      {empresasAssociadas &&
        empresasAssociadas.map((empresa: any) => {
          <p>{empresa.CompanyName}</p>;
        })}
    </Main>
  );
};

export default ModalClients;
