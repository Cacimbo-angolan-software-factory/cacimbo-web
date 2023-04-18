import React, { useState } from 'react';

import { Form, Tabs, Button } from './stylesSideBars';
import CheckMarkField from '../../CheckMarkField';
import { useDispatch, useSelector } from 'react-redux';
import {
  Checkbox,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { AppDispatch } from '../../../redux/store';
import { createTarefas } from '../../../redux/userFeatures/usersSlice';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TarefasSideBarContainer: React.FC<Props> = ({
  activeTab,
  setActiveTab,
}) => {
  const { perfis, isLoading } = useSelector((state: any) => state.user);
  const [value, setValue] = useState({
    tarefa: '',
    ref: '',
    icon: '',
  });
  const [editValue, setEditValue] = useState({
    tarefa: '',
    ref: '',
    icon: '',
  });
  const [perfil, setPerfil] = useState<any[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleOnEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue({ ...editValue, [event.target.name]: event.target.value });
  };

  const handlePerfil = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;
    setPerfil(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      createTarefas({
        tarefa: value.tarefa,
        ref: value.ref,
        icon: value.icon,
      })
    );

    setValue({
      tarefa: '',
      ref: '',
      icon: '',
    });
  };

  const handleCreate = () => {
    if (activeTab === 'create') {
      return (
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=''>Descrição</label>
            <input
              value={value.tarefa}
              onChange={handleOnChange}
              name='tarefa'
              type='text'
            />
          </div>

          <div>
            <label htmlFor=''>Ref. Artigo</label>
            <input
              value={value.ref}
              onChange={handleOnChange}
              name='ref'
              type='text'
            />
          </div>

          <div>
            <label htmlFor=''>Icon</label>
            <input
              value={value.icon}
              onChange={handleOnChange}
              name='icon'
              type='text'
            />
          </div>

          <CheckMarkField
            tag={'Perfis'}
            value={perfil}
            handleChange={handlePerfil}
          >
            {perfis.map((perf: any) => (
              <MenuItem key={perf.id} value={perf.perfil}>
                <Checkbox checked={perfil.indexOf(perf.perfil) > -1} />
                <ListItemText primary={perf.perfil} />
              </MenuItem>
            ))}
          </CheckMarkField>

          <Button type='submit'>
            {isLoading ? 'Aguarde...' : 'Criar tarefa'}
          </Button>
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
            <input
              value={editValue.tarefa}
              name='tarefa'
              onChange={handleOnEditChange}
              type='text'
            />
          </div>

          <div>
            <label htmlFor=''>Ref. Artigo</label>
            <input
              value={editValue.ref}
              name='ref'
              onChange={handleOnEditChange}
              type='text'
            />
          </div>

          <div>
            <label htmlFor=''>Icon</label>
            <input
              value={editValue.icon}
              name='icon'
              onChange={handleOnEditChange}
              type='text'
            />
          </div>

          <Button type='submit'>
            {' '}
            {isLoading ? 'Aguarde...' : 'Editar tarefa'}
          </Button>
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
