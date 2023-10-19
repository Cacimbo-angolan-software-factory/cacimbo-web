import React from 'react';

import { H1, LI, Main } from './modalStyles';

interface Props {
  openModalVersao: boolean;
  setOpenModalVersao: React.Dispatch<React.SetStateAction<boolean>>;
  setVersaoSelected: any;
  data: any;
}

const ModalVersao: React.FC<Props> = ({
  openModalVersao,
  setOpenModalVersao,
  data,
  setVersaoSelected,
}) => {
  const versaoFiltered = new Set(
    data.map((item: any) => (item.cacimbo_version ? item.cacimbo_version : ''))
  );

  const versions = Array.from(versaoFiltered);

  return (
    <Main className={openModalVersao === true ? 'open' : ''}>
      <H1>Escolha a versão</H1>
      {versions.map((item: any, index: number) => {
        return (
          <LI
            onClick={() => {
              setVersaoSelected(item);
              setOpenModalVersao(false);
            }}
            key={index}
          >
            {item === '' ? 'Versão não específicada' : item}
          </LI>
        );
      })}
    </Main>
  );
};

export default ModalVersao;
