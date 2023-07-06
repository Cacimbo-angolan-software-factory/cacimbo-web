import React, { useState } from 'react';
import {
  FooterDiv,
  Form,
  Header,
  InputDiv,
  Overlay,
  Select,
  Wrapper,
} from './associarUserStyles';
import { api, apiCacimbo } from '../../../service/Service.api';
import { IoCloseCircleOutline } from 'react-icons/io5';
import SelectInput from '../../SelectTextField';
import { MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsersEmpresas } from '../../../redux/userFeatures/usersSlice';

interface AssociarUserProps {
  openAssociar: boolean;
  setOpenAssociar: React.Dispatch<React.SetStateAction<boolean>>;
  userSelected: any;
}

const AssociarUser: React.FC<AssociarUserProps> = ({
  openAssociar,
  setOpenAssociar,
  userSelected,
}) => {
  const [value, setValue] = useState({
    nif: '',
    empresaSelecionada: '',
  });
  const [filteredEmpresas, setFilteredEmpresas] = useState([]);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = async () => {
    try {
      const response = await api.get(`docs_empresas/all-by-nif/${value.nif}`);
      const company = response.data.data;
      setFilteredEmpresas(company);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionChange = (event: any) => {
    const selectedValue = event.target.value;
    setValue({
      ...value,
      empresaSelecionada: selectedValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await apiCacimbo.post(`docs_empresas/associate-user`, {
        user_id: userSelected.id,
        companyId: value.empresaSelecionada,
      });
      dispatch(getUsersEmpresas(userSelected.id));
    } catch (error) {
      console.log(error);
    }

    setOpenAssociar(false);
  };

  return (
    <>
      <Wrapper className={openAssociar ? 'open' : ''}>
        <Header>
          <h2>Associar usuário</h2>
          <IoCloseCircleOutline onClick={() => setOpenAssociar(false)} />
        </Header>

        <Form onSubmit={handleSubmit}>
          <InputDiv>
            <p>Nif da empresa</p>
            <input
              name='nif'
              placeholder='Pesquise pelo nif...'
              value={value.nif}
              onChange={handleChange}
              type='text'
              onBlur={handleBlur}
            />
          </InputDiv>

          <Select
            value={value.empresaSelecionada}
            onChange={handleOptionChange}
          >
            {filteredEmpresas.map((item: any) => (
              <option key={item.CompanyID} value={item.CompanyID}>
                {item.CompanyName} - {item.CompanyID}
              </option>
            ))}
          </Select>
          <FooterDiv>
            <button onClick={() => setOpenAssociar(false)}>Cancelar</button>
            <button type='submit'> Associar</button>
          </FooterDiv>
        </Form>
      </Wrapper>

      {openAssociar && <Overlay onClick={() => setOpenAssociar(false)} />}
    </>
  );
};

export default AssociarUser;
