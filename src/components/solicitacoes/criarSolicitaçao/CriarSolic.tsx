import React from 'react';

import { Container, Form, Div, DivChild } from './stylesCriarSol';
import { MenuItem, TextField } from '@mui/material';
import SelectInput from '../../SelectTextField';

interface CriarSolicitaçaoProps {
  setClick: (value: boolean) => void;
}

const CriarSolicitaçao: React.FC<CriarSolicitaçaoProps> = ({ setClick }) => {
  const [value, setValue] = React.useState({
    nif: '',
    empresa: '',
    email: '',
    pais: '',
    província: '',
    endereço: '',
    cargo: '',
    responsável: '',
    licenceType: '',
    canal: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <h1>Solicitação</h1>

      <Form>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input
            name='nif'
            value={value.nif}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='empresa'>Empresa</label>
          <input
            name='empresa'
            value={value.empresa}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            value={value.email}
            onChange={handleChange}
            type='email'
          />
        </div>
        <SelectInput
          value={value.pais}
          labelName='País'
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, pais: e.target.value })
          }
        >
          <MenuItem value={'Angola'}>Angola</MenuItem>
          <MenuItem value={'Portugal'}>Portugal</MenuItem>
          <MenuItem value={'Brasil'}>Brasil</MenuItem>
          <MenuItem value={'Cabo Verde'}>Cabo Verde</MenuItem>
          <MenuItem value={'Moçambique'}>Moçambique</MenuItem>
          <MenuItem value={'São Tome'}>São Tomé</MenuItem>
          <MenuItem value={'Guiné'}>Guiné</MenuItem>
        </SelectInput>
        <DivChild>
          <div>
            <label htmlFor='provincia'>Província</label>
            <input
              name='provincia'
              value={value.província}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div>
            <label htmlFor='address'>Endereço</label>
            <input
              name='endereço'
              value={value.endereço}
              onChange={handleChange}
              type='address'
            />
          </div>
        </DivChild>
        <DivChild>
          <div>
            <label htmlFor='cargo'>Cargo</label>
            <input
              name='cargo'
              value={value.cargo}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div>
            <label htmlFor='responsavel'>Responsável</label>
            <input
              name='responsável'
              value={value.responsável}
              onChange={handleChange}
              type='name'
            />
          </div>
        </DivChild>
        <DivChild>
          <SelectInput
            value={value.licenceType}
            labelName='Tipo de licença'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, licenceType: e.target.value })
            }
          >
            <MenuItem value={'Comun'}>Comun</MenuItem>
            <MenuItem value={'Padronizar'}>Padronizar</MenuItem>
            <MenuItem value={'Renovação'}>Renovação</MenuItem>
          </SelectInput>
          {/* <div>
            <label htmlFor='licenças'>Licenças</label>
            <input type='text' />
          </div> */}
          <SelectInput
            value={value.canal}
            labelName='Canal'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, canal: e.target.value })
            }
          >
            <MenuItem value={'CACIMBO LDA'}>CACIMBO LDA</MenuItem>
            <MenuItem value={'MPOFO'}>MPOFO</MenuItem>
            <MenuItem value={'MEDIA INOVATE'}>MEDIA INOVATE</MenuItem>
            <MenuItem value={'R&L'}>R&L</MenuItem>
            <MenuItem value={'CACIMBO DEV'}>CACIMBO DEV</MenuItem>
          </SelectInput>
        </DivChild>
      </Form>

      <Div>
        <button onClick={() => setClick(false)}>Cancelar</button>
        <button>Criar solicitação</button>
      </Div>
    </Container>
  );
};

export default CriarSolicitaçao;
