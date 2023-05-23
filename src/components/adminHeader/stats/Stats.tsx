import React, { useContext } from 'react';
import { LicContext } from '../../../context';
import { StatsContainer, Stat } from './styles';
import { useSelector } from 'react-redux';

const Stats: React.FC = () => {
  const { TotalLicenses, totalPedidos } = useContext(LicContext);
  const { user } = useSelector((state: any) => state.user);

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
      {user.user.parceiro_id === 1 ? (
        <Stat>
          <h2>2786</h2>
          <p>Atribuídas</p>
        </Stat>
      ) : null}
    </StatsContainer>
  );
};

export default Stats;
