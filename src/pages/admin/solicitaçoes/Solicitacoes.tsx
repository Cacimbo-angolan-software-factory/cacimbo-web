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
  ContainerHeader,
} from './stylesSoli';
import { IoPersonAddOutline } from 'react-icons/io5';
import FiltersSoli from './FiltersSoli';
import EmptyState from '../../../components/emptyState/EmptyState';
import { useDispatch, useSelector } from 'react-redux';
import { getCanal } from '../../../redux/solicitaçaoFeatures/solicSlice';
import { AppDispatch } from '../../../redux/store';
import SideBarSoli from '../../../components/solicitacoes/sideBarSoli/SideBarSoli';
import ListIntContainer from '../../../components/solicitacoes/sideBarSoli/ListaIntContainer';

const Solicitaçoes: React.FC = () => {
  const {
    lic_requests,
    IsLoadingTheOrder,
    sections,
    loadingToApproveAndAuction,
    showInterest,
    aprovar,
    loadingInterest,
  } = useContext(LicContext);
  const [click, setClick] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [filtro, setFiltro] = React.useState('porAprovar');
  const [openInteressados, setOpenInteressados] = React.useState(false);
  const { user } = useSelector((state: any) => state.user);
  const { canal } = useSelector((state: any) => state.solicitaçao);
  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);

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
    console.log(lic_requests);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const renderSpinner = () => {
    return IsLoadingTheOrder && loadingToApproveAndAuction;
  };

  const handleInterest = (item: any) => {
    showInterest &&
      showInterest({
        canal_id: canal?.id,
        user_id: user?.user.id,
        solicitacao_id: item.id,
      });
  };

  const handleAprovar = (item: any) => {
    aprovar &&
      aprovar({
        canal_id: canal?.id,
        user_id: user?.user.id,
        solicitacao_id: item.id,
      });
  };

  const showPorAprovar = () => {
    if (filtro === 'porAprovar') {
      return (
        <Container>
          <thead>
            <ContainerHeader>
              <th>Data</th>
              <th>Cliente</th>
              <th>Solicitante</th>
              <th>Nif</th>
              <th>Contacto</th>
              <th>Status</th>
              <th>Ações</th>
            </ContainerHeader>
          </thead>
          <tbody>
            {sections[0]?.data.length > 0 &&
              sections[0].data
                .filter((item: any) => {
                  if (search === '') {
                    return item;
                  } else if (
                    item.parceiro.Nome.toLowerCase().includes(
                      search.toLowerCase()
                    ) ||
                    item.parceiro.Nif.toLowerCase().includes(
                      search.toLowerCase()
                    )
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
                    <td className='big-text data'>{section.data}</td>
                    <td>N/A</td>
                    <td className='big-text'>{section.parceiro.Nome}</td>
                    <td className='big-text'>{section.parceiro.Nif}</td>
                    <td className='big-text'>{section.parceiro.email}</td>
                    <td>
                      <span
                        className={
                          section.solicitacao.tipo === 'Renovação'
                            ? 'renovacao'
                            : section.solicitacao.tipo === 'Padronizar'
                            ? 'padronizar'
                            : 'comum'
                        }
                      >
                        {section.solicitacao.tipo}
                      </span>
                    </td>
                    <td className='big-text'>
                      <button onClick={() => handleAprovar(section.id)}>
                        <IoPersonAddOutline />
                        <p>Aprovar</p>
                      </button>
                    </td>
                  </Wrapper>
                ))}
          </tbody>
        </Container>
      );
    }
  };

  const showLeilao = () => {
    if (filtro === 'leilao') {
      return (
        <Container>
          <thead>
            <ContainerHeader>
              <th>Data</th>
              <th>Cliente</th>
              <th>Solicitante</th>
              <th>Nif</th>
              <th>Contacto</th>
              <th>Status</th>
              <th>Ações</th>
            </ContainerHeader>
          </thead>
          <tbody>
            {sections[1]?.data.length > 0 ? (
              sections[1].data
                .filter((item: any) => {
                  if (search === '') {
                    return item;
                  } else if (
                    item.empresa.nome
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.empresa.nif
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
                    <td className='big-text data'>{section.data}</td>
                    <td>N/A</td>
                    <td className='big-text'>{section.empresa.nome}</td>
                    <td className='big-text'>{section.empresa.nif}</td>
                    <td className='big-text'>{section.empresa.email}</td>
                    <td>
                      <span
                        className={
                          section.tipo === 'Renovação'
                            ? 'renovacao'
                            : section.tipo === 'Padronizar'
                            ? 'padronizar'
                            : 'comum'
                        }
                      >
                        {section.tipo}
                      </span>
                    </td>
                    <td>
                      <button
                        className='interesse'
                        onClick={() => handleInterest(section.id)}
                      >
                        <IoPersonAddOutline />
                        Interesse
                      </button>
                    </td>
                  </Wrapper>
                ))
            ) : (
              <EmptyDivState>
                <EmptyState>
                  <p>Não existem solicitações em leilão.</p>
                </EmptyState>
              </EmptyDivState>
            )}
          </tbody>
        </Container>
      );
    }
  };

  const showAtribuidas = () => {
    if (filtro === 'pendentes') {
      return (
        <Container>
          <thead>
            <ContainerHeader>
              <th>Data</th>
              <th>Cliente</th>
              <th>Solicitante</th>
              <th>Nif</th>
              <th>Interessados</th>
              <th>Status</th>
              <th>Ações</th>
            </ContainerHeader>
          </thead>
          <tbody>
            {lic_requests.length > 0 ? (
              lic_requests
                .filter((item: any) => {
                  if (search === '') {
                    return item;
                  } else if (
                    item.cliente_nome
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.cliente_nif
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
                .map((lic_request: any) => (
                  <Wrapper key={lic_request.id}>
                    <Solicitacao
                      open={openInteressados}
                      setOpen={setOpenInteressados}
                      lic_request={lic_request}
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
          </tbody>
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
              type='text'
              placeholder='Pesquisar...'
            />
          </SearchAndFilters>

          {showPorAprovar && showPorAprovar()}
          {showLeilao && showLeilao()}
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
