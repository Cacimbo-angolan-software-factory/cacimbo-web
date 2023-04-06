import React, { useState } from 'react';

import { Form, Tabs } from './stylesSideBars';

const PerfisSideBarContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create');

  const handleCreate = () => {
    if (activeTab === 'create') {
      return (
        <Form>
          <div>
            <label htmlFor=''>Perfil</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>Idioma</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>Descrição do perfil</label>
            <input type='text' />
          </div>
        </Form>
      );
    }
  };

  const handleEdit = () => {
    if (activeTab === 'edit') {
      return (
        <Form>
          <div>
            <label htmlFor=''>Perfil</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>Idioma</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>Descrição do perfil</label>
            <input type='text' />
          </div>
        </Form>
      );
    }
  };

  return (
    <>
      <h1>Gerenciamento de perfis</h1>

      <Tabs>
        <p
          className={activeTab === 'create' ? 'active' : ''}
          onClick={() => setActiveTab('create')}
        >
          Criar
        </p>
        <p
          className={activeTab === 'edit' ? 'active' : ''}
          onClick={() => setActiveTab('edit')}
        >
          Editar
        </p>
      </Tabs>

      {handleCreate()}
      {handleEdit()}
    </>
  );
};

export default PerfisSideBarContainer;
