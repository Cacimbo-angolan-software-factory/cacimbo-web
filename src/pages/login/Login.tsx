import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { login } from '../../redux/userFeatures/usersSlice';

import { Container, Overlay, SpinnerDiv } from './stylesLogin';
import { reset } from '../../redux/userFeatures/usersSlice';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { user, isError, isLoading, isSuccess } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isError) {
      setError('Email ou palavra-passe incorretos');
    }

    if (user) {
      window.location.pathname = '/';
    }

    dispatch(reset());
  }, [user, dispatch, isError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <Container>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Palavra-passe'
        />
        <button className='single-btn' type='submit'>
          Entrar
        </button>
      </form>

      {error && <p style={{ color: '#B71c51', margin: '15px 0' }}>{error}</p>}
      <p>
        Não tem uma conta? <a href='/criar-conta'>Criar conta</a>
      </p>

      <p>
        <a href='#'>Esqueceu a sua palavra passe?</a>
      </p>

      {isLoading && (
        <>
          <SpinnerDiv>
            <Spinner />
          </SpinnerDiv>
          <Overlay />
        </>
      )}
    </Container>
  );
};

export default Login;
