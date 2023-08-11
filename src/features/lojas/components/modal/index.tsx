import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
// import Spinner from '../spinner/Spinner';
// import SelectInput from '../SelectTextField';
import { useLoja } from '../../hooks';

// import {
//   formatPaymentMechanisms,
//   filterPaymentMechanisms,
//   extractCompanyDetails,
// } from './helpers'; // Import the helper functions

import {
  ModalContainer,
  Header,
  Overlay,
  Content,
  InputDiv,
  Form,
  FooterDiv,
  SpinnerDiv,
  Select,
} from './styles'; // Import styles
import Spinner from '../../../../components/spinner/Spinner';

interface LojasModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  selectedLoja?: LojaData;
}

interface LojaData {
  // ... your existing type definitions
}

const LojasModal: React.FC<LojasModalProps> = ({
  setShowModal,
  showModal,
  selectedLoja,
}) => {
  const {
    value,
    setStoreLogoUrl,
    loadingOnBlur,
    companyIds,
    isLoading,
    paymentMethods,
    handleChange,
    handleBlur,
    handleSubmit,
    handleOptionChange,
    handleCheck,
    // handleEdit,
  } = useLoja();

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
            onBlur={selectedLoja ? undefined : handleBlur}
            required
          />
        </InputDiv>

        <Form onSubmit={handleSubmit}>
          <Content>
            <InputDiv>
              Id da empresa:
              <Select
                value={value.CompanyID}
                disabled={
                  value.nif.length === 0 || value.nif === '' || loadingOnBlur
                }
                onChange={handleOptionChange}
              >
                <option value=''>Selecione um id</option>
                {companyIds.map((id: any) => (
                  <option key={id} value={id}>
                    {id}
                  </option>
                ))}
              </Select>
            </InputDiv>

            <InputDiv>
              Nome da loja:
              <input
                disabled={
                  value.nif.length === 0 || value.nif === '' || loadingOnBlur
                }
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
                disabled={
                  value.nif.length === 0 || value.nif === '' || loadingOnBlur
                }
                type='file'
                onChange={(e: any) => setStoreLogoUrl(e.target.files?.[0])}
                accept='image/*'
                required
              />
            </InputDiv>
            <InputDiv>
              Slogan:
              <input
                disabled={
                  value.nif.length === 0 || value.nif === '' || loadingOnBlur
                }
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
                value={value.ArmazemID}
                type='number'
                name='ArmazemID'
                onChange={handleChange}
                required
              />
            </InputDiv>

            <InputDiv>
              Métodos de pagamento:
              {paymentMethods.map((method: any) => (
                <label className='checkbox' key={method.id}>
                  <input
                    type='checkbox'
                    value={`${method.Mechanism},${method.Description}`}
                    onChange={(e) => handleCheck(e, method)}
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
              {isLoading
                ? 'Aguarde...'
                : selectedLoja
                ? 'Editar loja'
                : 'Criar loja'}
            </button>
          </FooterDiv>
        </Form>

        {loadingOnBlur && (
          <SpinnerDiv>
            <Spinner />
          </SpinnerDiv>
        )}
        {loadingOnBlur && <Overlay />}
      </ModalContainer>

      {showModal && <Overlay onClick={() => setShowModal(false)} />}
      <ToastContainer />
    </>
  );
};

export default LojasModal;
