import React, { useState } from 'react';

import {
  ModalContainer,
  Header,
  Overlay,
  Content,
  InputDiv,
} from './lojasModalStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface LojasModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const LojasModal: React.FC<LojasModalProps> = ({ setShowModal, showModal }) => {
  const [value, setValue] = useState({
    CompanyID: '',
    StoreName: '',
    StoreLogoUrl: '',
    StoreSlogan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      <ModalContainer className={showModal ? 'open' : ''}>
        <Header>
          <h2>Criar loja</h2>
          <IoCloseCircleOutline onClick={() => setShowModal(false)} />
        </Header>

        <Content>
          <form onSubmit={handleSubmit}>
            <InputDiv>
              Id da empresa:
              <input type='text' name='CompanyId' />
            </InputDiv>
          </form>
        </Content>
      </ModalContainer>

      {showModal && <Overlay onClick={() => setShowModal(false)} />}
    </>
  );
};

export default LojasModal;
