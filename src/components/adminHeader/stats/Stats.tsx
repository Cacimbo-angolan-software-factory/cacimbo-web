import React, { useContext } from 'react';
import { LicContext } from '../../../context';
import { StatsContainer, Stat, Div } from './styles';
import { useSelector } from 'react-redux';
import UserDropDown from '../../userDropDown/UserDropdown';

const Stats: React.FC = () => {
  const { TotalLicenses, totalPedidos } = useContext(LicContext);
  const { user } = useSelector((state: any) => state.user);
  const { lojas } = useSelector((state: any) => state.lojas);

  return (
    <Div>
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
        {user.user.parceiro_id === 1 ? (
          <Stat>
            <h2>{lojas.length}</h2>
            <p>Lojas</p>
          </Stat>
        ) : null}
      </StatsContainer>

      <UserDropDown />
    </Div>
  );
};

export default Stats;
