import {
  Checkbox,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  criarRole,
  getPermissions,
} from '../../../redux/permissionsFeatures/permissionSlice';
import { AppDispatch } from '../../../redux/store';
import CheckMarkField from '../../CheckMarkField';
import SelectInput from '../../SelectTextField';
import { Container, Div, Form } from './createRoleStyles';

interface CreateRoleProps {
  setCriarRole: (value: boolean) => void;
}

const CreateUserRole: React.FC<CreateRoleProps> = ({ setCriarRole }) => {
  const { list, isError, isLoading } = useSelector(
    (state: any) => state.permission
  );
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const [value, setValue] = React.useState({
    name: '',
    CompanyID: user.user.lastCompanyIDUsed,
    description: '',
    permissions: [] as any,
  });
  const [permission, setPermission] = React.useState<any[]>([]);

  useEffect(() => {
    dispatch(getPermissions());
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handlePermission = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;
    setPermission(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let permissionsId = list
      .filter((perm: any) => [...permission].includes(perm.id))
      .map((perm: any) => perm.id);

    event.preventDefault();
    dispatch(
      criarRole({
        name: value.name,
        CompanyID: value.CompanyID,
        description: value.description,
        permissions: permissionsId,
      })
    );
    console.log(value);
    console.log(permissionsId);
  };

  return (
    <Container>
      <h1>Funções de usuário</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nome'>Nome da função</label>
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

        {/* <SelectInput
          value={value.permissions}
          labelName='Permissão raíz'
          handleChange={(e: React.ChangeEvent<{ value: unknown }>) =>
            setValue({ ...value, permissions: e.target.value as string })
          }
        >
          {list
            .filter(
              (permission: any) =>
                permission.source_name === null && permission.source_id !== null
            )
            .map((permission: any) => (
              <MenuItem key={permission.id} value={permission.id}>
                {permission.name}
              </MenuItem>
            ))}
        </SelectInput> */}

        <CheckMarkField
          tag={'Permissão raíz'}
          value={permission}
          handleChange={handlePermission}
        >
          {list
            .filter(
              (permission: any) =>
                permission.source_name === null && permission.source_id !== null
            )
            .map((perm: any) => (
              <MenuItem key={perm.id} value={perm.id}>
                <Checkbox checked={permission.indexOf(perm.id) > -1} />
                <ListItemText primary={perm.name} />
              </MenuItem>
            ))}
        </CheckMarkField>

        <Div className='buttons'>
          <button onClick={() => setCriarRole(false)}>Cancelar</button>
          <button type='submit'>Criar função</button>
        </Div>
      </Form>
    </Container>
  );
};

export default CreateUserRole;
