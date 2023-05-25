import React from 'react';

import { Container } from './stylesLogin';

const ResetPassword: React.FC = () => {
  const [formData, setFormData] = React.useState({
    password: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch function
  };

  return (
    <Container>
      <h1>Mudar palavra-passe</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Palavra-passe atual'
        />
        <input
          type='password'
          name='newPassword'
          value={formData.newPassword}
          onChange={handleChange}
          placeholder='Nova palavra-passe'
        />
        <input
          type='password'
          name='newPasswordConfirm'
          value={formData.newPasswordConfirm}
          onChange={handleChange}
          placeholder='Confirmar palavra-passe'
        />
        <button type='submit'>Mudar palavra-passe</button>
      </form>

      <p>
        <a href='#'>Esqueceu a sua palavra passe?</a>
      </p>
    </Container>
  );
};

export default ResetPassword;
