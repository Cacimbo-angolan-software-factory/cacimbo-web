import React from 'react';

import {
  Content,
  FooterDiv,
  Header,
  InputDiv,
  Inputs,
  ModalRolesContainer,
} from './modalRolesStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface ModalRolesProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRoles: React.FC<ModalRolesProps> = ({ openModal, setOpenModal }) => {
  return (
    <ModalRolesContainer className={openModal ? 'open' : ''}>
      <Header>
        <h2>Criar função</h2>
        <IoCloseCircleOutline onClick={() => setOpenModal(false)} />
      </Header>

      <Content>
        <Inputs>
          <InputDiv>
            <p>Nome</p>
            <input type='text' name='name' />
          </InputDiv>
          <InputDiv>
            <p>Descrição</p>
            <input type='text' name='description' />
          </InputDiv>
        </Inputs>

        <div>
          <h2>Permissões</h2>
          <h2>Permissões</h2>
          <h2>Permissões</h2>
          <h2>Permissões</h2>
        </div>
      </Content>

      <FooterDiv>
        <button onClick={() => setOpenModal(false)}>Cancelar</button>
        <button>Criar função</button>
      </FooterDiv>
    </ModalRolesContainer>
  );
};

export default ModalRoles;
