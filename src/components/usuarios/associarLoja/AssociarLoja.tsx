import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
  Container,
  FooterDiv,
  Form,
  Header,
  Label,
  SectionRoles,
  Select,
} from './associarLojaStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  associarLoja,
  getLojas,
  getLojasAssociadas,
} from '../../../redux/lojasFeatures/lojasSlice';

interface IProps {
  openAssociarLoja: true;
  setOpenAssociarLoja: Dispatch<SetStateAction<boolean>>;
  userSelected: any;
}

const AssociarLoja: React.FC<IProps> = ({
  openAssociarLoja,
  setOpenAssociarLoja,
  userSelected,
}) => {
  const { lojas, isLoadingAssociar } = useSelector((state: any) => state.lojas);
  const [value, setValue] = useState({
    user_id: userSelected.id,
    user_nif: userSelected.nif,
    online_store_id: '',
  });

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getLojas());
    console.log(userSelected);
  }, []);

  const handleOptionChange = async (event: any) => {
    const selectedValue = event.target.value;
    setValue({
      ...value,
      online_store_id: selectedValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(associarLoja(value));
    dispatch(getLojasAssociadas());
  };

  return (
    <Container>
      <Header>
        <h2>Associar loja ao usuário</h2>
        <IoCloseCircleOutline onClick={() => setOpenAssociarLoja(false)} />
      </Header>

      <Form onSubmit={handleSubmit}>
        <Select
          value={value.online_store_id}
          onChange={handleOptionChange}
          // disabled={value.nif === ''}
        >
          <option value=''>Selecione a loja</option>
          {lojas.map((item: any) => (
            <option key={item.CompanyID} value={item.id}>
              {item.StoreName} - {item.CompanyID}
            </option>
          ))}
        </Select>

        <FooterDiv>
          <button type='reset' onClick={() => setOpenAssociarLoja(false)}>
            Cancelar
          </button>
          <button type='submit' disabled={isLoadingAssociar}>
            {isLoadingAssociar ? 'Um momento...' : 'Associar'}
          </button>
        </FooterDiv>
      </Form>
    </Container>
  );
};

export default AssociarLoja;
