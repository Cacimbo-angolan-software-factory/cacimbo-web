import React, { useEffect, useState } from 'react';

import { Input, Wrapper } from './stylesAcessoEmpresas';

interface IModalAcessoEmpresas {
  openModalEmpresas: boolean;
  empresasAssociadas: any;
  setSelectedEmpresa: any;
  setOpenModalEmpresas: any;
}

const ModalAcessoEmpresas: React.FC<IModalAcessoEmpresas> = ({
  openModalEmpresas,
  empresasAssociadas,
  setSelectedEmpresa,
  setOpenModalEmpresas,
}) => {
  const [search, setSearch] = useState<string>('');

  const handleClick = (empresa: any) => {
    setSelectedEmpresa(empresa);
    setOpenModalEmpresas(false);
  };

  return (
    <Wrapper className={openModalEmpresas ? 'open' : ''}>
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
                {/* {console.log(empresa)} */}
              </li>
            ))}
      </ul>
    </Wrapper>
  );
};

export default ModalAcessoEmpresas;
