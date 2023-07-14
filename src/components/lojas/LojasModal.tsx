import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

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
  getPaymentMethods,
} from '../../redux/lojasFeatures/lojasSlice';
import SelectInput from '../SelectTextField';
import { MenuItem } from '@mui/material';
import { api } from '../../service/Service.api';
import { ToastContainer, toast } from 'react-toastify';

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
    ArmazenID: 0,
    payments_methods: [] as any,
  });
  const [StoreLogoUrl, setStoreLogoUrl] = useState<FormDataOrNull>(null);

  const { companyIds, isLoading, loja, paymentMethods } = useSelector(
    (state: any) => state.lojas
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getPaymentMethods());
    // console.log(paymentMethods);
  }, []);

  const handleBlur = async () => {
    try {
      const response = await api.get(`docs_empresas/all-by-nif/${value.nif}`);
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

    if (
      value.CompanyID === '' ||
      value.StoreName === '' ||
      StoreLogoUrl === null
    ) {
      toast.error('Preencha todos os campos!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    } else {
      const formData = new FormData();
      formData.append('StoreLogoUrl', StoreLogoUrl as any);
      formData.append('StoreName', value.StoreName);
      formData.append('StoreSlogan', value.StoreSlogan);
      formData.append('CompanyID', value.CompanyID);
      formData.append('ArmazenID', value.ArmazenID.toString());
      formData.append(
        'payments_methods',
        JSON.stringify(value.payments_methods)
      );

      // console.log(formData);
      // console.log(value);

      dispatch(criarLoja(formData)).then(() => {
        toast.success('Loja criada com sucesso! 🎉', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        setTimeout(() => {
          setValue({
            nif: '',
            CompanyID: '',
            StoreName: '',
            StoreSlogan: '',
            ArmazenID: 0,
            payments_methods: [] as any,
          });
          setStoreLogoUrl(null);
          setShowModal(false);
        }, 2000);
      });
    }
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
              Nome da loja:
              <input
                disabled={value.nif.length === 0 || value.nif === ''}
                value={value.StoreName}
                type='text'
                name='StoreName'
                onChange={handleChange}
                required
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

            <InputDiv>
              Armazém:
              <input
                disabled={value.nif.length === 0 || value.nif === ''}
                value={value.ArmazenID}
                type='number'
                name='ArmazenID'
                onChange={handleChange}
              />
            </InputDiv>

            <InputDiv>
              Métodos de pagamento:
              {paymentMethods.map((method: any) => (
                <label className='checkbox' key={method.id}>
                  <input
                    type='checkbox'
                    value={`${method.Mechanism},${method.Description}`}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const selectedMethod = e.target.value.split(',');
                      const selectedMechanism = selectedMethod[0];
                      const selectedDescription = selectedMethod[1];

                      if (e.target.checked) {
                        const updatedMethods = [
                          ...value.payments_methods,
                          {
                            Mechanism: selectedMechanism,
                            Description: selectedDescription,
                          },
                        ];

                        setValue({
                          ...value,
                          payments_methods: updatedMethods,
                        });
                      } else {
                        const updatedMethods = value.payments_methods.filter(
                          (method: any) =>
                            method.Mechanism !== selectedMechanism &&
                            method.Description !== selectedDescription
                        );

                        setValue({
                          ...value,
                          payments_methods: updatedMethods,
                        });
                      }
                    }}
                  />
                  {method.Description}
                </label>
              ))}
            </InputDiv>
          </Content>

          <FooterDiv>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
            <button type='submit'>
              {' '}
              {isLoading ? 'Aguarde...' : 'Criar loja'}
            </button>
          </FooterDiv>
        </Form>
      </ModalContainer>

      {showModal && <Overlay onClick={() => setShowModal(false)} />}
      <ToastContainer />
    </>
  );
};

export default LojasModal;
