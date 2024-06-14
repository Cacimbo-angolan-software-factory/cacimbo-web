import React, { ChangeEvent } from 'react';
import { Form, Modal } from './stylesLogin';

interface IProps {
  phoneNumber: string;
  verificationCode: string;
  handlePhoneNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleVerificationCodeChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  verifyPhoneNumber: () => Promise<void>;
  isVerifying: boolean;
  verificationError: string;
}

const VerificarModal: React.FC<IProps> = ({
  phoneNumber,
  verificationCode,
  handlePhoneNumberChange,
  handleVerificationCodeChange,
  verifyPhoneNumber,
  isVerifying,
  verificationError,
}) => {
  return (
    <Modal>
      <h3>Insira o seu número e o código de verificação</h3>

      <Form>
        <input
          type='number'
          placeholder='Número de telefone'
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          type='text'
          placeholder='Código de verificação'
          value={verificationCode}
          onChange={handleVerificationCodeChange}
        />
        <button onClick={verifyPhoneNumber}>
          {isVerifying ? 'Verificando...' : 'Verificar'}
        </button>
      </Form>
    </Modal>
  );
};

export default VerificarModal;
