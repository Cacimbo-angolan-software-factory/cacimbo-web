import React, { Dispatch, SetStateAction } from 'react';

import { Main, H1, LI } from './modalStyles';

interface Props {
  openModal: boolean;
  data: any;
  setProvinciaSelected: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModalProvincia: React.FC<Props> = ({
  openModal,
  data,
  setProvinciaSelected,
  setOpenModal,
}) => {
  const uniqueCities = new Set(
    data.map((item: any) => (item.City ? item.City.trim().toUpperCase() : null))
  );
  const citiesArray = Array.from(uniqueCities);

  return (
    <Main className={openModal ? 'open' : ''}>
      <H1>Pesquise por província</H1>

      {citiesArray.map((item: any, index: number) => {
        return (
          <LI
            onClick={() => {
              setProvinciaSelected(item);
              setOpenModal(false);
            }}
            key={index}
          >
            {item === null ? 'Província não identificada' : item}
          </LI>
        );
      })}
    </Main>
  );
};

export default ModalProvincia;
