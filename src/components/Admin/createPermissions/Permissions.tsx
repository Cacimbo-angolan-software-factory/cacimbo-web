import React from 'react';
import { useDispatch } from 'react-redux';
import { criarPermission } from '../../../redux/permissionsFeatures/permissionSlice';
import { AppDispatch } from '../../../redux/store';
import { Container, Div, Form } from './PermissionsStyles';
import { Type } from '../../../redux/permissionsFeatures/permissionService';

interface PermissionsProps {
  setCriarPermission: (value: boolean) => void;
}

const Permissions: React.FC<PermissionsProps> = ({ setCriarPermission }) => {
  const [value, setValue] = React.useState({
    name: '',
    description: '',
    type: Type.geral,
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(criarPermission(value));

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
          <label htmlFor='nome'>Nome</label>
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

        <Div className='buttons'>
          <button onClick={() => setCriarPermission(false)}>Cancelar</button>
          <button type='submit'>Criar permissão</button>
        </Div>
      </Form>
    </Container>
  );
};

export default Permissions;
