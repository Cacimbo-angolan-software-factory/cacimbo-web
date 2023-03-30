import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  criarPermission,
  getPermissions,
} from '../../../redux/permissionsFeatures/permissionSlice';
import { AppDispatch } from '../../../redux/store';
import { Container, Div, Form } from './PermissionsStyles';
import { Type } from '../../../redux/permissionsFeatures/permissionService';
import SelectInput from '../../SelectTextField';
import { MenuItem } from '@mui/material';

interface PermissionsProps {
  setCriarPermission: (value: boolean) => void;
}

const Permissions: React.FC<PermissionsProps> = ({ setCriarPermission }) => {
  const { list, isError, isLoading } = useSelector(
    (state: any) => state.permission
  );
  const [value, setValue] = React.useState({
    name: '',
    description: '',
    type: Type.geral,
    source_name: '',
    source_id: '',
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    dispatch(getPermissions());
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let source = list.filter(
      (permission: any) => permission.name === value.source_name
    )[0];
    console.log({ source });

    event.preventDefault();
    dispatch(
      criarPermission({
        name: value.name,
        description: value.description,
        type: value.type,
        source_name: source?.name,
        source_id: source?.id,
      })
    );

    // setValue({
    //   name: '',
    //   description: '',
    //   type: Type.geral,
    // });
    console.log(value);
  };

  return (
    <Container>
      <h1>Permissões</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nome'>Nome da permissão</label>
          <input
            name='name'
            value={value.name}
            onChange={handleChange}
            type='text'
          />
        </div>

        <div>
          <label htmlFor='nome'>Descrição</label>
          <input
            name='description'
            value={value.description}
            onChange={handleChange}
            type='text'
          />
        </div>

        <SelectInput
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
        </SelectInput>

        <Div className='buttons'>
          <button onClick={() => setCriarPermission(false)}>Cancelar</button>
          <button type='submit'>Criar permissão</button>
        </Div>
      </Form>
    </Container>
  );
};

export default Permissions;
