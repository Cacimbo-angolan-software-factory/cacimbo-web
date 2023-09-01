import React, { useState } from 'react';
import {
  ErrorMsg,
  FooterDiv,
  Form,
  Header,
  InputDiv,
  Overlay,
  Select,
  SpinnerDiv,
  Wrapper,
} from './associarUserStyles';
import { api, apiCacimbo } from '../../../service/Service.api';
import { IoCloseCircleOutline } from 'react-icons/io5';
import SelectInput from '../../SelectTextField';
import { MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsersEmpresas } from '../../../redux/userFeatures/usersSlice';
import Spinner from '../../spinner/Spinner';

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
  const [errorMsg, setErrorMsg] = useState('');
  const [loadingNif, setLoadingNif] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = async () => {
    try {
      setLoadingNif(true);
      const response = await api.get(`docs_empresas/all-by-nif/${value.nif}`);
      const company = response.data.data;
      setFilteredEmpresas(company);
      setLoadingNif(false);
    } catch (error) {
      setErrorMsg('Nif não encontrado');
      setLoadingNif(false);
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
      setOpenAssociar(false);
    } catch (error) {
      setErrorMsg('Erro ao associar usuário, verifique o nif 🧐');
      console.log(error);
    }

    console.log(value);
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
            disabled={value.nif === ''}
          >
            <option value=''>Selecione o id da empresa</option>
            {filteredEmpresas.map((item: any) => (
              <option key={item.CompanyID} value={item.CompanyID}>
                {item.CompanyName} - {item.CompanyID}
              </option>
            ))}
          </Select>

          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <FooterDiv>
            <button onClick={() => setOpenAssociar(false)}>Cancelar</button>
            <button type='submit'> Associar</button>
          </FooterDiv>
        </Form>

        {loadingNif && (
          <SpinnerDiv>
            <Spinner />
          </SpinnerDiv>
        )}

        {loadingNif && <Overlay />}
      </Wrapper>

      {openAssociar && <Overlay onClick={() => setOpenAssociar(false)} />}
    </>
  );
};

export default AssociarUser;
