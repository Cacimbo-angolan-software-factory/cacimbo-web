import React from 'react';

import { Wrapper } from './emptyStateStyles';
import emptyState from '../../assets/emptyState.svg';

interface EmptyStateProps {
  children: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ children }) => {
  return (
    <Wrapper>
      <img src={emptyState} alt='empty state' />
      {children}
    </Wrapper>
  );
};

export default EmptyState;
