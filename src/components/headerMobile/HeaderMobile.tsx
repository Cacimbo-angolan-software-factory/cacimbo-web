import React from 'react';
import { RiMenuLine } from 'react-icons/ri';

import { Container } from './styles';

const HeaderMobile: React.FC = () => {
  return (
    <Container>
      <span>
        <RiMenuLine />
      </span>

      <h1>Hello</h1>
    </Container>
  );
};

export default HeaderMobile;
