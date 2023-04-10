import React, { useState } from 'react';

import { Form, Tabs } from './stylesSideBars';
import CheckMarkField from '../../CheckMarkField';
import { useSelector } from 'react-redux';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TarefasSideBarContainer: React.FC<Props> = ({
  activeTab,
  setActiveTab,
}) => {
  const { perfis } = useSelector((state: any) => state.user);

  const handleCreate = () => {
    if (activeTab === 'create') {
      return (
        <Form>
          <div>
            <label htmlFor=''>Descrição</label>
            <input type='text' />
          </div>

          <div>
            <label htmlFor=''>Ref. Artigo</label>
            <input type='text' />
          </div>

          <div>
            <label htmlFor=''>Icon</label>
            <input type='text' />
          </div>

          {/* <CheckMarkField
            tag={'Perfis'}
            value={padronizar}
            handleChange={handlePadronizar}
          >
            {moduloPadronizar.map((pad: any) => (
              <MenuItem key={pad.id} value={pad.descricao}>
                <Checkbox checked={padronizar.indexOf(pad.descricao) > -1} />
                <ListItemText primary={pad.descricao} />
              </MenuItem>
            ))}
          </CheckMarkField> */}
        </Form>
      );
    }
  };

  const handleEdit = () => {
    if (activeTab === 'edit') {
      return (
        <Form>
          <div>
            <label htmlFor=''>Descrição</label>
            <input type='text' />
          </div>

          <div>
            <label htmlFor=''>Ref. Artigo</label>
            <input type='text' />
          </div>

          <div>
            <label htmlFor=''>Icon</label>
            <input type='text' />
          </div>
        </Form>
      );
    }
  };

  return (
    <>
      <h1>Gerenciamento de tarefas</h1>

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

export default TarefasSideBarContainer;
