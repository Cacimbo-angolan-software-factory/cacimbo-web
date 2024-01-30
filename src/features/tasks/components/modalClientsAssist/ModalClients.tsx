import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Input, Main } from './modalClientsStyle';

interface IProps {
  empresasAssociadas: any;
  setEmpresaSelected: Dispatch<any>;
  setOpenModalClients: Dispatch<SetStateAction<boolean>>;
  setFiltro: Dispatch<SetStateAction<string>>;
  setChildFiltro: Dispatch<SetStateAction<string>>;
}

const ModalClients: React.FC<IProps> = ({
  empresasAssociadas,
  setEmpresaSelected,
  setOpenModalClients,
  setFiltro,
  setChildFiltro,
}) => {
  const [search, setSearch] = useState<string>('');

  const handleClick = (empresa: any) => {
    setEmpresaSelected(empresa);
    setOpenModalClients(false);
    setFiltro('cliente');
    setChildFiltro('clienteTodas');
  };

  return (
    <Main>
      <h1>Empresas</h1>

      <label>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
          value={search}
          type='text'
          placeholder='Pesquise por nome ou id da empresa...'
        />
      </label>
      <ul>
        {empresasAssociadas &&
          empresasAssociadas
            .filter((item: any) => {
              if (search === '') {
                return item;
              } else if (
                item.CompanyName.toLowerCase().includes(search.toLowerCase()) ||
                item.CompanyID.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((empresa: any, index: number) => (
              <li onClick={() => handleClick(empresa)} key={index}>
                {empresa.CompanyName}
              </li>
            ))}
      </ul>
    </Main>
  );
};

export default ModalClients;
