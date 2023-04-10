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
    task: '',
    ref: '',
    icon: '',
  });
  const [perfil, setPerfil] = useState<any[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handlePerfil = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;
    setPerfil(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // dispatch(
    //   createTarefas({
    //     task: value.task,
    //     ref: value.ref,
    //     icon: value.icon,
    //   })
    // );

    console.log(value);
  };

  const handleCreate = () => {
    if (activeTab === 'create') {
      return (
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=''>Descrição</label>
            <input
              value={value.task}
              onChange={handleOnChange}
              name='task'
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

          <Button type='submit'>Criar</Button>
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

          <Button type='submit'>Editar</Button>
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
