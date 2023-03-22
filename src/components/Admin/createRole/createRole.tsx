import { MenuItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import SelectInput from '../../SelectTextField';
import { Container, Div, Form } from './createRoleStyles';

interface CreateRoleProps {
  setCriarRole: (value: boolean) => void;
}

const CreateRole: React.FC<CreateRoleProps> = ({ setCriarRole }) => {
  const { list, isError, isLoading } = useSelector(
    (state: any) => state.permission
  );
  const { user } = useSelector((state: any) => state.user);

  const [value, setValue] = React.useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <Container>
      <h1>Funções de usuário</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nome'>Nome da permissão</label>
          <input
            name='name'
            // value={value.name}
            onChange={handleChange}
            type='text'
          />
        </div>

        <div>
          <label htmlFor='nome'>Descrição</label>
          <input
            name='description'
            // value={value.description}
            onChange={handleChange}
            type='text'
          />
        </div>

        {/* <SelectInput
          value={value.source_name}
          labelName='Permissão raíz'
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, source_name: e.target.value })
          }
        >
          {list
            .filter(
              (permission: any) =>
                permission.source_name === null && permission.source_id !== null
            )
            .map((permission: any) => (
              <MenuItem key={permission.id} value={permission.name}>
                {permission.name}
              </MenuItem>
            ))}
        </SelectInput> */}

        <Div className='buttons'>
          <button onClick={() => setCriarRole(false)}>Cancelar</button>
          <button type='submit'>Criar função</button>
        </Div>
      </Form>
    </Container>
  );
};

export default CreateRole;
