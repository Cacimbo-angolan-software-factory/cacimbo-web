import React, { useContext } from 'react';
import { LicContext } from '../../../context';
import { StatsContainer, Stat } from './styles';

const Stats: React.FC = () => {
  const { TotalLicenses, totalPedidos } = useContext(LicContext);

  return (
    <StatsContainer>
      <Stat>
        <h2>{TotalLicenses}</h2>
        <p>Licenças</p>
      </Stat>
      <Stat>
        <h2>{totalPedidos}</h2>
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
