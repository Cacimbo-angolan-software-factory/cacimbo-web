import React, { useContext, useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  Form,
  Div,
  DivChild,
  Select,
  SpinnerDiv,
  Overlay,
  ErrorMsg,
} from './stylesCriarSol';
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
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../../spinner/Spinner';

interface CriarSolicitaçaoProps {
  setClick: (value: boolean) => void;
}

const CriarSolicitaçao: React.FC<CriarSolicitaçaoProps> = ({ setClick }) => {
  const { getLicRequest } = useContext(LicContext);
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
  const { getNif, loadingNif } = useContext(LicContext);
  const [comum, setComum] = React.useState<any[]>([]);
  const [padronizar, setPadronizar] = React.useState<any[]>([]);
  const [showPadronizar, setShowPadronizar] = React.useState(false);
  const [showLicencas, setShowLicencas] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const inputRefs = useRef<any>([]);
  const numberOfInputs = Object.keys(value).length;
  const [licencaSelected, setLicencaSelected] = React.useState<any>();
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleOnKeyDown = (event: any, index: number) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const nextIndex = (index + 1) % numberOfInputs;
      inputRefs.current[nextIndex].focus();
    }
  };

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
    } else {
      setErrorMsg('Nif não encontrado 🧐');
    }
  };

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const modulos = [...moduloComum, ...moduloPadronizar];
    const modulosId = modulos
      .filter((modulo) => [...comum, ...padronizar].includes(modulo.descricao))
      .map((obj) => obj.id);
    const modulosDeRenovacao = licencaSelected.solicitacao.sol_modulos.map(
      (obj: any) => obj.modulo_id
    );

    let canal_id = canal?.filter(
      (canal: any) => canal?.Nome === value.canal_id
    )[0]?.id;
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
          modulo: showLicencas ? modulosDeRenovacao : modulosId,
          parceiro_id: user?.user.parceiro_id,
          user_id: user?.user.id,
        })
      ).then(() => {
        toast.success('Solicitação criada com sucesso!', {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });

      setTimeout(() => {
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
        setClick(false);
        getLicRequest && getLicRequest();
      }, 2500);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  const handleInputChange = (e: any) => {
    const selectedValue = e.target.value;
    setValue({
      ...value,
      pais: selectedValue,
    });
  };

  const handleInputTipos = (e: any) => {
    const selectedValue = e.target.value;
    setValue({
      ...value,
      tipo: selectedValue,
    });
  };

  const handleInputLicencaId = (e: any) => {
    const selectedValue = e.target.value;
    setValue({
      ...value,
      licencaId: selectedValue,
    });
    const licencaId = parseInt(e.target.value);

    const selectedLicense = licencasDaEmpresa.find(
      (lic: any) => lic.id === licencaId
    );
    if (selectedLicense) {
      setLicencaSelected(selectedLicense);
    } else {
      setLicencaSelected([]);
    }
  };

  return (
    <Container>
      <h1>Solicitação</h1>

      <ErrorMsg>{errorMsg}</ErrorMsg>
      <Form onSubmit={handleSubmmit}>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input
            name='nif'
            value={value.nif}
            onChange={handleChange}
            onBlur={handleGetNif}
            type='text'
            required
          />
        </div>
        <div>
          <label htmlFor='empresa'>Empresa</label>
          <input
            name='empresa'
            value={value.empresa}
            onChange={handleChange}
            type='text'
            disabled={value.nif.length === 0 || value.nif === ''}
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
              disabled={value.nif.length === 0 || value.nif === ''}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              value={value.email}
              onChange={handleChange}
              type='email'
              disabled={value.nif.length === 0 || value.nif === ''}
            />
          </div>
        </DivChild>

        <Select
          value={value.pais}
          disabled={value.nif.length === 0 || value.nif === ''}
          onChange={handleInputChange}
        >
          <option value=''>País</option>
          <option value='Angola'>Angola</option>
          <option value='Portugal'>Portugal</option>
          <option value='Brasil'>Brasil</option>
          <option value='Cabo Verde'>Cabo Verde</option>
          <option value='Moçambique'>Moçambique</option>
          <option value='São Tome'>São Tomé</option>
          <option value='Guiné'>Guiné</option>
        </Select>

        <DivChild>
          <div>
            <label htmlFor='provincia'>Província</label>
            <input
              name='provincia'
              value={value.provincia}
              onChange={handleChange}
              type='text'
              disabled={value.nif.length === 0 || value.nif === ''}
            />
          </div>
          <div>
            <label htmlFor='address'>Localidade</label>
            <input
              name='localidade'
              value={value.localidade}
              onChange={handleChange}
              type='address'
              disabled={value.nif.length === 0 || value.nif === ''}
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
            disabled={value.nif.length === 0 || value.nif === ''}
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
              disabled={value.nif.length === 0 || value.nif === ''}
            />
          </div>
          <div>
            <label htmlFor='responsavel'>Responsável</label>
            <input
              name='responsavel'
              value={value.responsavel}
              onChange={handleChange}
              type='name'
              disabled={value.nif.length === 0 || value.nif === ''}
            />
          </div>
        </DivChild>
        <DivChild>
          <Select
            value={value.tipo}
            disabled={value.nif.length === 0 || value.nif === ''}
            onChange={handleInputTipos}
          >
            <option value=''>Selecione o tipo de licença</option>
            {tipoDeLicenca.map((tipo: any) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </Select>
          <Select
            value={value.canal_id}
            required
            disabled={value.nif.length === 0 || value.nif === ''}
            onChange={(e: any) => {
              setValue({ ...value, canal_id: e.target.value });
            }}
          >
            <option value=''>Selecione o canal</option>
            {canal.map((canal: any) => (
              <option key={canal.id} value={canal.Nome}>
                {canal.Nome}
              </option>
            ))}
          </Select>
        </DivChild>

        {showPadronizar ? null : (
          <CheckMarkField
            disabled={value.nif.length === 0 || value.nif === ''}
            tag={'Comum'}
            value={comum}
            handleChange={handleComum}
          >
            {moduloComum.map((com: any) => (
              <MenuItem key={com.id} value={com.descricao}>
                <Checkbox checked={comum.indexOf(com.descricao) > -1} />
                <ListItemText primary={com.descricao} />
              </MenuItem>
            ))}
          </CheckMarkField>
        )}

        {showLicencas
          ? null
          : showPadronizar && (
              <CheckMarkField
                tag={'Padronizar'}
                value={padronizar}
                handleChange={handlePadronizar}
              >
                {moduloPadronizar.map((pad: any) => (
                  <MenuItem key={pad.id} value={pad.descricao}>
                    <Checkbox
                      checked={padronizar.indexOf(pad.descricao) > -1}
                    />
                    <ListItemText primary={pad.descricao} />
                  </MenuItem>
                ))}
              </CheckMarkField>
            )}

        {showLicencas && (
          <Select
            value={value.licencaId}
            disabled={value.nif.length === 0 || value.nif === ''}
            onChange={handleInputLicencaId}
          >
            <option value=''>Selecione a licença</option>
            {licencasDaEmpresa.map((licenca: any) => (
              <option key={licenca.id} value={licenca.id}>
                {licenca.cliente_nome} - {licenca.id} - {licenca.data_validade}
              </option>
            ))}
          </Select>
        )}

        <Div className='buttons'>
          <button onClick={() => setClick(false)}>Cancelar</button>
          <button type='submit'>
            {isLoading ? 'Aguarde...' : 'Criar solicitação'}
          </button>
        </Div>
      </Form>

      {loadingNif && (
        <SpinnerDiv>
          <Spinner />
        </SpinnerDiv>
      )}

      {loadingNif && <Overlay />}
    </Container>
  );
};

export default CriarSolicitaçao;
