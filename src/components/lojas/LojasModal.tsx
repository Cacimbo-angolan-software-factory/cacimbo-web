import React, { useEffect, useState } from 'react';

import {
  ModalContainer,
  Header,
  Overlay,
  Content,
  InputDiv,
  Form,
  FooterDiv,
} from './lojasModalStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  getCompanyIdWithNif,
  criarLoja,
} from '../../redux/lojasFeatures/lojasSlice';
import SelectInput from '../SelectTextField';
import { MenuItem } from '@mui/material';
import { apiCacimbo } from '../../service/Service.api';

interface LojasModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

type FormDataOrNull = FormData | null;

const LojasModal: React.FC<LojasModalProps> = ({ setShowModal, showModal }) => {
  const [value, setValue] = useState({
    nif: '',
    CompanyID: '',
    StoreName: '',
    StoreSlogan: '',
  });
  const [StoreLogoUrl, setStoreLogoUrl] = useState<FormDataOrNull>(null);

  const { companyIds, isLoading } = useSelector((state: any) => state.lojas);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = async () => {
    try {
      const response = await apiCacimbo.get(
        `docs_empresas/all-by-nif/${value.nif}`
      );
      const company = response.data.data[0];
      dispatch(getCompanyIdWithNif(value.nif));

      if (company) {
        setValue({
          ...value,
          CompanyID: company.CompanyID,
          StoreName: company.CompanyName,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('StoreLogoUrl', StoreLogoUrl as any);
    formData.append('StoreName', value.StoreName);
    formData.append('StoreSlogan', value.StoreSlogan);
    formData.append('CompanyID', value.CompanyID);

    dispatch(criarLoja(formData));
    console.log(formData.getAll('StoreLogoUrl'));
  };

  return (
    <>
      <ModalContainer className={showModal ? 'open' : ''}>
        <Header>
          <h2>Criar loja</h2>
          <IoCloseCircleOutline onClick={() => setShowModal(false)} />
        </Header>

        <InputDiv className='nif'>
          Nif:
          <input
            value={value.nif}
            type='text'
            placeholder='pesquise pelo nif...'
            name='nif'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </InputDiv>

        <Form onSubmit={handleSubmit}>
          <Content>
            <SelectInput
              value={value.CompanyID}
              disabled={value.nif.length === 0 || value.nif === ''}
              labelName='Id da empresa'
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue({ ...value, CompanyID: e.target.value })
              }
            >
              {companyIds.map((id: any) => (
                <MenuItem key={id} value={id}>
                  {id}
                </MenuItem>
              ))}
            </SelectInput>
            <InputDiv>
              Nome da empresa:
              <input
                disabled={value.nif.length === 0 || value.nif === ''}
                value={value.StoreName}
                type='text'
                name='StoreName'
                onChange={handleChange}
              />
            </InputDiv>
            <InputDiv>
              Logo:
              <input
                disabled={value.nif.length === 0 || value.nif === ''}
                type='file'
                onChange={(e: any) => setStoreLogoUrl(e.target.files?.[0])}
                accept='image/*'
              />
            </InputDiv>
            <InputDiv>
              Slogan:
              <input
                disabled={value.nif.length === 0 || value.nif === ''}
                value={value.StoreSlogan}
                type='text'
                name='StoreSlogan'
                onChange={handleChange}
              />
            </InputDiv>
          </Content>

          <FooterDiv>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
            <button type='submit'>
              {' '}
              {isLoading ? 'Aguarde...' : 'Criar usuário'}
            </button>
          </FooterDiv>
        </Form>
      </ModalContainer>

      {showModal && <Overlay onClick={() => setShowModal(false)} />}
    </>
  );
};

export default LojasModal;