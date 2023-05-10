import React, { useContext, useEffect } from 'react';

import { Container, Form, Div, DivChild } from './stylesCriarSol';
import { Checkbox, ListItemText, MenuItem, TextField } from '@mui/material';
import SelectInput from '../../SelectTextField';
import { LicContext } from '../../../context';
import CheckMarkField from '../../CheckMarkField';
import { tipoDeLicenca } from './tipoDeLicencas';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  criarSolic,
  getCanal,
  getModuloComum,
  getModuloPadronizar,
  getLicencaPorEmpresa,
} from '../../../redux/solicitaçaoFeatures/solicSlice';

interface CriarSolicitaçaoProps {
  setClick: (value: boolean) => void;
}

const CriarSolicitaçao: React.FC<CriarSolicitaçaoProps> = ({ setClick }) => {
  const {
    solic,
    isError,
    isLoading,
    canal,
    moduloComum,
    moduloPadronizar,
    licencasDaEmpresa,
  } = useSelector((state: any) => state.solicitaçao);
  const [value, setValue] = React.useState({
    nif: '',
    empresa: '',
    telefone: '',
    email: '',
    responsavel: '',
    cargo: '',
    morada: '',
    localidade: '',
    provincia: '',
    pais: '',
    modulo: [] as any,
    tipo: '',
    licencaId: '',
    canal_id: '',
  });
  const { getNif } = useContext(LicContext);
  const [comum, setComum] = React.useState<any[]>([]);
  const [padronizar, setPadronizar] = React.useState<any[]>([]);
  const [showPadronizar, setShowPadronizar] = React.useState(false);
  const [showLicencas, setShowLicencas] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    value.tipo === 'Padronizar' || value.tipo === 'Renovação'
      ? setShowPadronizar(true)
      : setShowPadronizar(false);

    value.tipo === 'Renovação' && value.nif
      ? setShowLicencas(true)
      : setShowLicencas(false);
  }, [value, padronizar.length]);

  useEffect(() => {
    dispatch(getCanal());
    dispatch(getModuloComum());
    dispatch(getModuloPadronizar());
  }, []);

  const handleComum = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;
    setComum(value);
  };

  const handlePadronizar = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;
    setPadronizar(value);
  };

  const handleGetNif = async () => {
    if (getNif === undefined) return;
    const empresa = await getNif(value.nif);
    dispatch(getLicencaPorEmpresa(value.nif));
    if (empresa) {
      setValue({
        ...value,
        empresa: empresa.nome,
        email: empresa.email,
        telefone: empresa.telefone,
        pais: empresa.pais,
        provincia: empresa.provincia,
        localidade: empresa.localidade,
        morada: empresa.morada,
        cargo: empresa.cargo,
        responsavel: empresa.contacto_nome,
      });
    }
  };

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const modulos = [...moduloComum, moduloPadronizar];
    const modulosId = modulos
      .filter((modulo) => [...comum, ...padronizar].includes(modulo.descricao))
      .map((obj) => obj.id);

    let canal_id = canal.filter(
      (canal: any) => canal.Nome === value.canal_id
    )[0].id;

    try {
      const user = JSON.parse(localStorage.getItem('user') || 'null');

      dispatch(
        criarSolic({
          nif: value.nif,
          empresa: value.empresa,
          telefone: value.telefone,
          email: value.email,
          pais: value.pais,
          provincia: value.provincia,
          localidade: value.localidade,
          morada: value.morada,
          cargo: value.cargo,
          responsavel: value.responsavel,
          tipo: value.tipo,
          canal_id: canal_id,
          licencaId:
            typeof value.licencaId === 'string' && value.licencaId.length === 0
              ? 0
              : value.licencaId,
          modulo: modulosId,
          parceiro_id: user?.user.parceiro_id,
          user_id: user?.user.id,
        })
      );
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (isError) {
      alert('Erro ao criar solicitação');
    }

    if (solic) {
      setValue({
        nif: '',
        empresa: '',
        telefone: '',
        email: '',
        pais: '',
        provincia: '',
        localidade: '',
        morada: '',
        cargo: '',
        responsavel: '',
        tipo: '',
        canal_id: '',
        licencaId: '',
        modulo: [],
      });
      setTimeout(() => {
        setClick(false);
      }, 2500);
    }
  }, [isError, solic]);

  return (
    <Container>
      <h1>Solicitação</h1>

      <Form onSubmit={handleSubmmit}>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input
            name='nif'
            value={value.nif}
            onChange={handleChange}
            onBlur={handleGetNif}
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
        <DivChild>
          <div>
            <label htmlFor='telefone'>Telefone</label>
            <input
              name='telefone'
              value={value.telefone}
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
        </DivChild>
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
              value={value.provincia}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div>
            <label htmlFor='address'>Localidade</label>
            <input
              name='localidade'
              value={value.localidade}
              onChange={handleChange}
              type='address'
            />
          </div>
        </DivChild>
        <div>
          <label htmlFor='address'>Morada</label>
          <input
            name='morada'
            value={value.morada}
            onChange={handleChange}
            type='address'
          />
        </div>
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
              value={value.responsavel}
              onChange={handleChange}
              type='name'
            />
          </div>
        </DivChild>
        <DivChild>
          <SelectInput
            value={value.tipo}
            labelName='Tipo de licença'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, tipo: e.target.value })
            }
          >
            {tipoDeLicenca.map((tipo) => (
              <MenuItem key={tipo} value={tipo}>
                {tipo}
              </MenuItem>
            ))}
          </SelectInput>
          <SelectInput
            value={value.canal_id}
            labelName='Canal'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, canal_id: e.target.value })
            }
          >
            {canal.map((canal: any) => (
              <MenuItem key={canal.id} value={canal.Nome}>
                {canal.Nome}
              </MenuItem>
            ))}
          </SelectInput>
        </DivChild>

        <CheckMarkField tag={'Comum'} value={comum} handleChange={handleComum}>
          {moduloComum.map((com: any) => (
            <MenuItem key={com.id} value={com.descricao}>
              <Checkbox checked={comum.indexOf(com.descricao) > -1} />
              <ListItemText primary={com.descricao} />
            </MenuItem>
          ))}
        </CheckMarkField>

        {showPadronizar && (
          <CheckMarkField
            tag={'Padronizar'}
            value={padronizar}
            handleChange={handlePadronizar}
          >
            {moduloPadronizar.map((pad: any) => (
              <MenuItem key={pad.id} value={pad.descricao}>
                <Checkbox checked={padronizar.indexOf(pad.descricao) > -1} />
                <ListItemText primary={pad.descricao} />
              </MenuItem>
            ))}
          </CheckMarkField>
        )}

        {showLicencas && (
          <SelectInput
            value={value.licencaId}
            labelName='Licenças'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, licencaId: e.target.value })
            }
          >
            {licencasDaEmpresa.map((licenca: any) => (
              <MenuItem key={licenca.id} value={licenca.cliente_nome}>
                {licenca.cliente_nome}
                <span style={{ fontWeight: 600 }}> - {licenca.id}</span>
                <span style={{ color: '#bebebe' }}>
                  {' '}
                  - {licenca.data_validade}
                </span>
              </MenuItem>
            ))}
          </SelectInput>
        )}

        <Div className='buttons'>
          <button onClick={() => setClick(false)}>Cancelar</button>
          <button type='submit'>
            {isLoading ? 'Aguarde...' : 'Criar solicitação'}
          </button>
        </Div>
      </Form>
    </Container>
  );
};

export default CriarSolicitaçao;
