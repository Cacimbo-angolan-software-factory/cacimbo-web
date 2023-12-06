import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import { useCreateLoja } from '../../hooks/useCreateLoja';

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
} from './styles';
import Spinner from '../../../../components/spinner/Spinner';
import {
  getCompanyIdWithNif,
  getLojas,
  getPaymentMethods,
  updateLoja,
} from '../../../../redux/lojasFeatures/lojasSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';

interface LojasModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLoja: any;
}

interface LojaData {
  nif: string;
  CompanyID: string;
  StoreName: string;
  StoreSlogan: string;
  ArmazemID: string;
  paymentMethods: string[];
  StoreLogoUrl: string;
  company: any;
}

const LojasModal: React.FC<LojasModalProps> = ({
  showModal,
  setShowModal,
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
    setValue,
    // setPaymentMechanismsList,
    // paymentMechanismsList,
  } = useCreateLoja();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (selectedLoja) {
      const payments_mechanisms =
        selectedLoja.company.online_payments_mechanisms.map((method: any) => ({
          Mechanism: method.Mechanism,
          Description: method.Description,
        }));
      setValue({
        nif: selectedLoja.company?.TaxRegistrationNumber,
        CompanyID: selectedLoja.CompanyID,
        StoreName: selectedLoja.StoreName,
        StoreSlogan: selectedLoja.StoreSlogan,
        ArmazemID: selectedLoja.ArmazemID,
        payments_mechanisms,
      });
      // setPaymentMechanismsList({
      //   paymentMechanismsList:
      //     selectedLoja.company?.online_payments_mechanisms.map(
      //       (method: any) => ({
      //         Mechanism: method.Mechanism,
      //         Description: method.Description,
      //       })
      //     ),
      // });
      dispatch(
        getCompanyIdWithNif(selectedLoja.company?.TaxRegistrationNumber)
      );
    } else {
      setValue({
        nif: '',
        CompanyID: '',
        StoreName: '',
        StoreSlogan: '',
        ArmazemID: 0,
        payments_mechanisms: [] as any,
      });
    }
    dispatch(getPaymentMethods());
  }, [selectedLoja]);

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(updateLoja(selectedLoja)).then(() => {
      toast.success('Loja editada com sucesso! 🎉', {
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
          ArmazemID: 0,
          payments_mechanisms: [] as any,
        });
        // setPaymentMechanismsList([]);
        setStoreLogoUrl(null);
        dispatch(getLojas());
      }, 2000);
    });
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
            onBlur={selectedLoja ? undefined : handleBlur}
            required
          />
        </InputDiv>

        <Form onSubmit={selectedLoja ? handleEdit : handleSubmit}>
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
            {selectedLoja ? null : (
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
            )}
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
                    checked={value.payments_mechanisms.some(
                      (mechanism: any) =>
                        mechanism.Mechanism === method.Mechanism
                    )}
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
            <button disabled={value.nif === ''} type='submit'>
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
