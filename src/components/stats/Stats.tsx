import React from 'react';

import { StatsContainer, Stat } from './styles';

const Stats: React.FC = () => {
  return (
    <StatsContainer>
      <Stat>
        <h2>555</h2>
        <p>Licenças</p>
      </Stat>
      <Stat>
        <h2>6</h2>
        <p>Solicitações</p>
      </Stat>
      <Stat>
        <h2>2786</h2>
        <p>Atribuídas</p>
      </Stat>
    </StatsContainer>
  );
};

export default Stats;
