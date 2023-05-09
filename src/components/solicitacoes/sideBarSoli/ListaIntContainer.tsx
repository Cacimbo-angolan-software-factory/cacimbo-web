import React, { useContext } from 'react';
import { Container, ParceiroDiv, ScrollView, Tabs } from './SideBarStylesSoli';
import { LicContext } from '../../../context';
import { IoPersonAddOutline } from 'react-icons/io5';

const ListIntContainer: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('interessados');
  const { empresas } = useContext(LicContext);

  const handleInteressados = () => {
    if (activeTab === 'interessados') {
      return (
        <div>
          <p>empresa</p>
          <p>empresa</p>
          <p>empresa</p>
          <p>empresa</p>
          <p>empresa</p>
          <p>empresa</p>
        </div>
      );
    }
  };

  const handleParceiros = () => {
    if (activeTab === 'parceiros') {
      return (
        <ScrollView>
          {empresas.map((empresa) => (
            <ParceiroDiv>
              <p key={empresa.id}>{empresa.Nome}</p>
              <button>
                <IoPersonAddOutline />
                Atribuir
              </button>
            </ParceiroDiv>
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <Container>
      <Tabs>
        <p
          className={activeTab === 'interessados' ? 'active' : ''}
          onClick={() => setActiveTab('interessados')}
        >
          Parceiros interessados
        </p>
        <p
          className={activeTab === 'parceiros' ? 'active' : ''}
          onClick={() => setActiveTab('parceiros')}
        >
          Lista de parceiros
        </p>
      </Tabs>

      {handleInteressados()}
      {handleParceiros()}
    </Container>
  );
};

export default ListIntContainer;
