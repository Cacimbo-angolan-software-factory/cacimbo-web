import React, { useState } from 'react';
import {
  Button,
  Container,
  DivButtons,
  ErrorMsg,
  Overlay,
} from './stylesLogin';
import VerificarModal from './VerificarModal';
import axios from 'axios';
import { api, baseUrlGetNif } from '../../service/Service.api';

const Register: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [nif, setNif] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [isValidNif, setIsValidNif] = useState(false);
  const [loadingNif, setLoadingNif] = useState(false);
  const [step, setStep] = useState('1');
  const [value, setValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [data, setData] = useState<any>({});
  const [loadingCreate, setLoadingCreate] = useState(false);

  const handleNifChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNif(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(e.target.value);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const validateNif = async () => {
    setLoadingNif(true);
    try {
      const response = await baseUrlGetNif.get(`${nif}`);
      console.log(response);
      if (response.status === 200) {
        setData(response.data);
        setIsValidNif(true);
        setLoadingNif(false);
        setStep('2');
      } else {
        setIsValidNif(false);
        alert('NIF inválido');
      }
    } catch (error) {
      setIsValidNif(false);
      setMessage('Erro ao validar o NIF');
    } finally {
      setLoadingNif(false);
    }
  };

  const verifyPhoneNumber = async () => {
    setIsVerifying(true);
    try {
      const response = await api.post('users/verifyPhone', {
        phone: [phoneNumber],
        code: verificationCode,
      });
      if (response.status === 200) {
        alert('Phone number verified successfully');
        setOpen(false);
        window.location.href = '/login';
      } else {
        setVerificationError('Failed to verify phone number');
      }
    } catch (error) {
      setVerificationError('Error verifying phone number');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = async () => {
    setLoadingCreate(true);
    if (
      !nif ||
      !phoneNumber ||
      !value.email ||
      !value.password ||
      !value.confirmPassword
    ) {
      setMessage('Preencha todos os campos');
      return;
    }

    if (value.password !== value.confirmPassword) {
      setMessage('As senhas não são iguais');
      return;
    }

    try {
      const response = await api.post('users/signup/erp', {
        nif,
        phone: phoneNumber,
        name: data.nome,
        email: value.email,
        password: value.password,
      });
      if (response.status === 200) {
        alert('Conta criada com sucesso');
        setLoadingCreate(false);
        window.location.href = '/login';
      } else {
        alert('Failed to create account');
      }
    } catch (error: any) {
      console.log(error);
      alert('Erro ao criar conta, tente mais tarde');
    } finally {
      setLoadingCreate(false);
    }
  };

  const handleFirstForm = () => {
    if (step === '1') {
      return (
        <form>
          <input
            placeholder='Insira o seu NIF'
            type='text'
            name='nif'
            value={nif}
            onChange={handleNifChange}
          />

          <DivButtons>
            <a href='/login'>
              <Button type='button'>Cancelar</Button>
            </a>
            <Button
              disabled={isValidNif ? true : false}
              type='button'
              onClick={validateNif}
            >
              {loadingNif === true ? 'Um momento...' : 'Continuar'}
            </Button>
          </DivButtons>

          {message && <ErrorMsg>{message}</ErrorMsg>}
        </form>
      );
    }
  };

  const handle2ndForm = () => {
    if (step === '2') {
      return (
        <form>
          <p>Nome: {data.nome}</p>
          <p>NIF: {data.nif}</p>
          <input
            placeholder='Telefone'
            type='number'
            name='phoneNumber'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <input
            placeholder='E-mail'
            type='email'
            name='email'
            value={value.email}
            onChange={handleChangeValue}
          />
          <input
            placeholder='Digite a senha'
            type='password'
            name='password'
            value={value.password}
            onChange={handleChangeValue}
          />
          <input
            placeholder='Digite novamente a senha'
            type='password'
            name='confirmPassword'
            value={value.confirmPassword}
            onChange={handleChangeValue}
          />

          <DivButtons>
            <a href='/login'>
              <Button type='button'>Cancelar</Button>
            </a>
            <Button type='button' onClick={handleSubmit}>
              {loadingCreate === true ? 'Um momento...' : 'Finalizar'}
            </Button>
          </DivButtons>

          {message && <ErrorMsg>{message}</ErrorMsg>}
        </form>
      );
    }
  };

  return (
    <>
      <Container>
        {handleFirstForm && handleFirstForm()}
        {handle2ndForm && handle2ndForm()}
        <Button onClick={() => setOpen(true)}>Verificar conta</Button>
      </Container>

      {open && (
        <VerificarModal
          phoneNumber={phoneNumber}
          verificationCode={verificationCode}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleVerificationCodeChange={handleVerificationCodeChange}
          verifyPhoneNumber={verifyPhoneNumber}
          isVerifying={isVerifying}
          verificationError={verificationError}
        />
      )}
      {open && <Overlay onClick={() => setOpen(false)} />}
    </>
  );
};

export default Register;
