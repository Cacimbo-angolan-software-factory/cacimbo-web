import React from 'react';

import { Button } from './stylesBtnCreate';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
}

const BtnCreate: React.FC<Props> = ({ children, onClick, style }) => {
  return (
    <Button onClick={onClick} style={style}>
      {children}
    </Button>
  );
};

export default BtnCreate;
