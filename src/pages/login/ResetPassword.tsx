import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useEffect } from 'react';

import { Container } from './stylesLogin';
import { LicContext } from '../../context';
import { ToastContainer, toast } from 'react-toastify';
import ModalConcluido from '../../components/modalConcluido/ModalConcluido';

const ResetPassword: React.FC = () => {
  const [formData, setFormData] = React.useState({
    current_password: '',
    new_password: '',
    new_confirm_password: '',
  });
  const [showModal, setShowModal] = React.useState(false);
  const { changePassword, loadingPassword } = useContext(LicContext);

  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changePassword({
      current_password: formData.current_password,
      new_password: formData.new_password,
      new_confirm_password: formData.new_confirm_password,
    }).then(() => {
      toast.success('Palavra-passe alterada com sucesso!', {
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
        setFormData({
          current_password: '',
          new_password: '',
          new_confirm_password: '',
        });
        window.location.pathname = '/';
      }, 2500);
    });

    console.log(formData);
  };

  return (
    <>
      <Container>
        <h1>Mudar palavra-passe</h1>

        <form onSubmit={handleSubmit}>
          <input
            type='password'
            name='current_password'
            value={formData.current_password}
            onChange={handleChange}
            placeholder='Palavra-passe atual'
          />
          <input
            type='password'
            name='new_password'
            value={formData.new_password}
            onChange={handleChange}
            placeholder='Nova palavra-passe'
          />
          <input
            type='password'
            name='new_confirm_password'
            value={formData.new_confirm_password}
            onChange={handleChange}
            placeholder='Confirmar palavra-passe'
          />
          <button type='submit'>
            {loadingPassword ? 'Aguarde...' : 'Mudar palavra-passe'}
          </button>
        </form>

        <p>
          <a href='#'>Esqueceu a sua palavra passe?</a>
        </p>
      </Container>

      <ToastContainer />
    </>
  );
};

export default ResetPassword;
