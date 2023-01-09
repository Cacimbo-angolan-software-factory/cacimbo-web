import React from 'react';

import { Container } from './stylesLogin';

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Login</h1>

      <form>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='palavra-passe' />
        <button type='submit'>Entrar</button>
      </form>

      <p>
        Esqueceu sua palavra-passe? <a href='#'>Clique aqui</a>
      </p>
    </Container>
  );
};

export default Login;
