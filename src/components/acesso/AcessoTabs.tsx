import React from 'react';

import { Wrapper } from './acessoStyles';

interface AcessoTabsProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}

const AcessoTabs: React.FC<AcessoTabsProps> = ({ setActiveTab, activeTab }) => {
  return (
    <Wrapper>
      <h2
        className={activeTab === 'padrao' ? 'active' : 'inactive'}
        onClick={() => setActiveTab('padrao')}
      >
        Funções padrão
      </h2>
      <h2
        className={activeTab === 'personalizada' ? 'active' : 'inactive'}
        onClick={() => setActiveTab('personalizada')}
      >
        Funções personalizadas
      </h2>
    </Wrapper>
  );
};

export default AcessoTabs;
