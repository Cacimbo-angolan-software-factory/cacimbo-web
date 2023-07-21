import React, { useContext, useEffect, useRef } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import CriarSolicitaçao from '../../../components/solicitacoes/criarSolicitaçao/CriarSolic';
import Solicitacao from '../../../components/solicitacoes/Solicitacao';
import Spinner from '../../../components/spinner/Spinner';
import { LicContext } from '../../../context';

import {
  Container,
  InputSearch,
  Wrapper,
  EmptyDivState,
  SearchAndFilters,
  Card,
  Cards,
} from './stylesSoli';
import {
  IoPersonAddOutline,
  IoLocationOutline,
  IoDocumentTextOutline,
  IoMailUnreadOutline,
  IoCalendarOutline,
  IoBusinessOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import FiltersSoli from './FiltersSoli';
import EmptyState from '../../../components/emptyState/EmptyState';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCanal,
  getEmpresas,
  getModulo,
} from '../../../redux/solicitaçaoFeatures/solicSlice';
import { AppDispatch } from '../../../redux/store';
import SideBarSoli from '../../../components/solicitacoes/sideBarSoli/SideBarSoli';
import ListIntContainer from '../../../components/solicitacoes/sideBarSoli/ListaIntContainer';
import SelectInput from '../../../components/SelectTextField';
import { MenuItem } from '@mui/material';

const Solicitaçoes: React.FC = () => {
  const {
    lic_requests,
    IsLoadingTheOrder,
    sections,
    loadingToApproveAndAuction,
    showInterest,
    aprovar,
    loadingAprovar,
  } = useContext(LicContext);
  const [click, setClick] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const { user } = useSelector((state: any) => state.user);
  const [filtro, setFiltro] = React.useState(
    user.user.tipo === 'Admin' ? 'porAprovar' : 'leilao'
  );
  const [openInteressados, setOpenInteressados] = React.useState(false);
  const { canal, modulosList, empresasList, isLoading } = useSelector(
    (state: any) => state.solicitaçao
  );
  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);
  const [value, setValue] = React.useState({
    canal_id: '',
  });

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpenInteressados(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  useEffect(() => {
    dispatch(getCanal());
    dispatch(getModulo());
    dispatch(getEmpresas());
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const renderSpinner = () => {
    return IsLoadingTheOrder && loadingToApproveAndAuction;
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleInterest = (item: any) => {
    let canal_id = canal.filter(
      (canal: any) => canal.Nome === value.canal_id
    )[0].id;

    showInterest &&
      showInterest({
        canal_id: canal_id,
        user_id: user?.user.id,
        solicitacao_id: item.id,
      });
    refreshPage();
  };

  const handleAprovar = (item: any) => {
    aprovar &&
      aprovar({
        parceiro_id: item.parceiro_id,
        user_id: user?.user.id,
        solicitacao_id: item.solicitacao_id,
      });
  };

  const getModulosId = (modulos: any) => {
    const modulosId = modulosList.filter((modulo: any) =>
      modulos.includes(modulo.id)
    );

    return modulosId.map((obj: any) => <li key={obj.id}>{obj.modulo}</li>);
  };

  const getLocation = (location: any) => {
    const empresa = empresasList.find(
      (empresaLocation: any) => empresaLocation.id === location
    );

    return empresa?.localidade;
  };

  const showPorAprovar = () => {
    if (filtro === 'porAprovar') {
      return (
        <Container>
          {sections[0]?.data.length > 0 &&
            sections[0].data
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.solicitacao?.empresa.nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.solicitacao?.empresa.nif
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .sort((a: any, b: any) => {
                const dateA = new Date(a.data);
                const dateB = new Date(b.data);
                return dateB.getTime() - dateA.getTime();
              })
              .map((section: any, index: number) => (
                <Wrapper key={`${section.id} - ${index}`}>
                  <div className='companies'>
                    <div>
                      <IoPeopleOutline />
                      <h3>{section?.solicitacao?.empresa.nome}</h3>
                    </div>
                    <div>
                      <IoBusinessOutline />
                      <h3>{section.parceiro.Nome}</h3>
                    </div>
                  </div>

                  <div className='nif-status'>
                    <p className='nif'>
                      <IoDocumentTextOutline />
                      {section?.solicitacao?.empresa.nif}
                    </p>
                    <span
                      className={
                        section?.solicitacao?.tipo === 'Renovação'
                          ? 'renovacao'
                          : section?.solicitacao?.tipo === 'Padronizar'
                          ? 'padronizar'
                          : 'comum'
                      }
                    >
                      {section?.solicitacao?.tipo}
                    </span>
                  </div>

                  <p>
                    <IoMailUnreadOutline />
                    {section.solicitacao?.empresa.email}
                  </p>
                  <p className='date'>
                    <IoCalendarOutline />
                    {section.data}
                  </p>
                  <button onClick={() => handleAprovar(section)}>
                    <IoPersonAddOutline />
                    <p>Aprovar</p>
                  </button>
                </Wrapper>
              ))}

          {loadingAprovar && <Spinner />}
        </Container>
      );
    }
  };

  const LeilaoParceiros = () => {
    if (filtro === 'leilao') {
      return (
        <Cards>
          {sections[1]?.data.length > 0 &&
            sections[1].data
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.empresa.localidade
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .sort((a: any, b: any) => {
                const dateA = new Date(a.data);
                const dateB = new Date(b.data);
                return dateB.getTime() - dateA.getTime();
              })
              .map((section: any, index: number) => (
                <Card key={`${section.id} - ${index}`}>
                  <div className='Div'>
                    <p className='id'>
                      <span></span>
                      Solicitação {section.id} -{' '}
                    </p>

                    <ul>
                      {section.sol_modulos.map(
                        (module: any) =>
                          module.modulo && (
                            <li key={module.id}>{module.modulo.modulo}</li>
                          )
                      )}
                    </ul>
                  </div>

                  <p className='location'>
                    <IoLocationOutline />
                    {section.empresa.localidade} - {section.empresa.provincia}
                  </p>
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
                  <button
                    onClick={() => {
                      handleInterest(section.id);
                    }}
                  >
                    Interessado
                  </button>
                </Card>
              ))}

          {lic_requests
            .filter((item: any) => {
              if (search === '') {
                return item;
              } else if (
                getLocation(item.empresa_id)
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .sort((a: any, b: any) => {
              const dateA = new Date(a.data);
              const dateB = new Date(b.data);
              return dateB.getTime() - dateA.getTime();
            })
            .map((pendente: any, index: number) => (
              <Card key={`${pendente.id} - ${index}`}>
                <div className='Div'>
                  <p className='id'>
                    <span></span> Solicitação {pendente.id} -{' '}
                  </p>

                  <ul>
                    {getModulosId(
                      pendente.sol_modulos.map((mod: any) => mod.modulo_id)
                    )}
                  </ul>
                </div>

                <p className='location'>
                  <IoLocationOutline />
                  {getLocation(pendente.empresa_id)}
                </p>
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
                <button
                  onClick={() => {
                    handleInterest(pendente.id);
                  }}
                >
                  Interessado
                </button>
              </Card>
            ))}
        </Cards>
      );
    }
  };

  const showAtribuidas = () => {
    if (filtro === 'pendentes') {
      return (
        <Container>
          {lic_requests.length > 0 ? (
            lic_requests
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.cliente_nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.cliente_nif.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .sort((a: any, b: any) => {
                const dateA = new Date(a.data);
                const dateB = new Date(b.data);
                return dateB.getTime() - dateA.getTime();
              })
              .map((lic_request: any) => (
                <Wrapper key={lic_request.id}>
                  <Solicitacao
                    open={openInteressados}
                    setOpen={setOpenInteressados}
                    lic_request={lic_request}
                    getModulosId={getModulosId}
                  />
                </Wrapper>
              ))
          ) : (
            <EmptyDivState>
              <EmptyState>
                <p>Não existem solicitações pendentes.</p>
              </EmptyState>
            </EmptyDivState>
          )}
        </Container>
      );
    }
  };

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <BtnCreate
        style={{
          display: click ? 'none' : 'flex',
        }}
        onClick={() => setClick(true)}
      >
        Nova Solicitação
      </BtnCreate>

      {click ? (
        <CriarSolicitaçao setClick={setClick} />
      ) : (
        <>
          <SearchAndFilters>
            <FiltersSoli filtro={filtro} setFiltro={setFiltro} />
            <InputSearch
              onChange={handleSearch}
              value={search}
              name='search'
              type='text'
              placeholder='Pesquisar...'
            />
          </SearchAndFilters>

          {showPorAprovar && showPorAprovar()}

          {LeilaoParceiros && LeilaoParceiros()}

          {showAtribuidas && showAtribuidas()}
        </>
      )}

      {renderSpinner() && <Spinner />}
      <ScrollTop />
      {openInteressados && (
        <SideBarSoli menuRef={menuRef}>
          <ListIntContainer />
        </SideBarSoli>
      )}
    </>
  );
};

export default Solicitaçoes;
