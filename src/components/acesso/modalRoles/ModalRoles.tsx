import React from 'react';

import {
  Content,
  FooterDiv,
  Header,
  InputDiv,
  Inputs,
  ModalRolesContainer,
  Overlay,
} from './modalRolesStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';

interface ModalRolesProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRoles: React.FC<ModalRolesProps> = ({ openModal, setOpenModal }) => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = React.useState({
    name: '',
    CompanyID: user.user.lastCompanyIDUsed,
    description: '',
    permissions: [] as any,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <>
      <ModalRolesContainer className={openModal ? 'open' : ''}>
        <Header>
          <h2>Criar função</h2>
          <IoCloseCircleOutline onClick={() => setOpenModal(false)} />
        </Header>

        <form>
          <Content>
            <Inputs>
              <InputDiv>
                <p>Nome</p>
                <input
                  name='name'
                  value={value.name}
                  onChange={handleChange}
                  type='text'
                />
              </InputDiv>
              <InputDiv>
                <p>Descrição</p>
                <input
                  name='description'
                  value={value.description}
                  onChange={handleChange}
                  type='text'
                />
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
            <button type='submit'>Criar função</button>
          </FooterDiv>
        </form>
      </ModalRolesContainer>

      {openModal && <Overlay onClick={() => setOpenModal(false)} />}
    </>
  );
};

export default ModalRoles;
