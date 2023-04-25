import React, { useContext, useEffect } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import CriarSolicitaçao from '../../../components/solicitacoes/criarSolicitaçao/CriarSolic';
import Solicitacao from '../../../components/solicitacoes/Solicitacao';
import Spinner from '../../../components/spinner/Spinner';
import { LicContext } from '../../../context';

import { Container, InputSearch, Wrapper, EmptyDivState } from './stylesSoli';
import {
  IoPersonAddOutline,
  IoCheckmarkDoneCircleOutline,
} from 'react-icons/io5';
import FiltersSoli from './FiltersSoli';
import EmptyState from '../../../components/emptyState/EmptyState';
import { useDispatch, useSelector } from 'react-redux';
import { getCanal } from '../../../redux/solicitaçaoFeatures/solicSlice';
import { AppDispatch } from '../../../redux/store';

const Solicitaçoes: React.FC = () => {
  const {
    lic_requests,
    IsLoadingTheOrder,
    sections,
    loadingToApproveAndAuction,
    showInterest,
    loadingInterest,
    empresas,
  } = useContext(LicContext);
  const [click, setClick] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [filtro, setFiltro] = React.useState('todas');
  const { user } = useSelector((state: any) => state.user);
  const { canal } = useSelector((state: any) => state.solicitaçao);
  const dispatch = useDispatch<AppDispatch>();

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

  const filterBySearch = (data: any) => {
    data.filter((item: any) => {
      if (search === '') {
        return item;
      } else if (
        item.empresa.nome.toLowerCase().includes(search.toLowerCase()) ||
        item.empresa.nif.toLowerCase().includes(search.toLowerCase())
      ) {
        return item;
      }
    });
  };

  const showTodas = () => {
    if (filtro === 'todas') {
      return (
        <>
          <Container>
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
                  <div key={`${section.id} - ${index}`}>
                    <Wrapper>
                      <h2>{section.parceiro.Nome}</h2>
                      <p>{section.id}</p>
                      <h2 className='nif'>{section.parceiro.Nif}</h2>
                      <p>{section.solicitacao.tipo}</p>
                      <p>{section.data}</p>
                      <div>
                        <button>
                          <IoCheckmarkDoneCircleOutline />
                          Aprovar
                        </button>
                      </div>
                    </Wrapper>
                  </div>
                ))}

            {sections[1]?.data.length > 0 &&
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
                  <div key={`${section.id} - ${index}`}>
                    <Wrapper>
                      <h2>{section.empresa.nome}</h2>
                      <p>{section.id}</p>
                      <h2 className='nif'>{section.empresa.nif}</h2>
                      <p>{section.tipo}</p>
                      <p>{section.data}</p>
                      <div>
                        <button className='interesse'>
                          {loadingInterest ? (
                            'Aguarde...'
                          ) : (
                            <>
                              <IoPersonAddOutline />
                              Interesse
                            </>
                          )}
                        </button>
                      </div>
                    </Wrapper>
                  </div>
                ))}

            {lic_requests
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
                <div key={lic_request.id}>
                  <Solicitacao lic_request={lic_request} />
                </div>
              ))}
          </Container>
        </>
      );
    }
  };

  const showPorAprovar = () => {
    if (filtro === 'porAprovar') {
      return (
        <Container>
          {sections[0]?.data.length > 0 ? (
            sections[0].data
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.parceiro.Nome.toLowerCase().includes(
                    search.toLowerCase()
                  ) ||
                  item.parceiro.Nif.toLowerCase().includes(search.toLowerCase())
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
                <div key={`${section.id} - ${index}`}>
                  <Wrapper>
                    <h2>{section.parceiro.Nome}</h2>
                    <p>{section.id}</p>
                    <h2 className='nif'>{section.parceiro.Nif}</h2>
                    <p>{section.solicitacao.tipo}</p>
                    <p>{section.data}</p>
                    <div>
                      <button>
                        <IoCheckmarkDoneCircleOutline />
                        Aprovar
                      </button>
                    </div>
                  </Wrapper>
                </div>
              ))
          ) : (
            <EmptyDivState>
              <EmptyState>
                <p>Não existem solicitações por aprovar.</p>
              </EmptyState>
            </EmptyDivState>
          )}
        </Container>
      );
    }
  };

  const showLeilao = () => {
    if (filtro === 'leilao') {
      return (
        <Container>
          {sections[1]?.data.length > 0 ? (
            sections[1].data
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.empresa.nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.empresa.nif.toLowerCase().includes(search.toLowerCase())
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
                <div key={`${section.id} - ${index}`}>
                  <Wrapper>
                    <h2>{section.empresa.nome}</h2>
                    {/* <p>{section.sol_modulos.modulo.modulo}</p> */}
                    <h2 className='nif'>{section.empresa.nif}</h2>
                    <p>{section.tipo}</p>
                    <p>{section.data}</p>
                    <div>
                      <button
                        className='interesse'
                        onClick={() => handleInterest(section.id)}
                      >
                        <IoPersonAddOutline />
                        Interesse
                      </button>
                    </div>
                  </Wrapper>
                </div>
              ))
          ) : (
            <EmptyDivState>
              <EmptyState>
                <p>Não existem solicitações em leilão.</p>
              </EmptyState>
            </EmptyDivState>
          )}
        </Container>
      );
    }
  };

  const showAtribuidas = () => {
    if (filtro === 'atribuidas') {
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
                <div key={lic_request.id}>
                  <Solicitacao lic_request={lic_request} />
                </div>
              ))
          ) : (
            <EmptyDivState>
              <EmptyState>
                <p>Não existem solicitações por atribuir.</p>
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
          <InputSearch
            onChange={handleSearch}
            value={search}
            type='text'
            placeholder='Pesquise solicitação...'
          />

          <FiltersSoli filtro={filtro} setFiltro={setFiltro} />

          {showPorAprovar && showPorAprovar()}
          {showLeilao && showLeilao()}
          {showTodas && showTodas()}
          {showAtribuidas && showAtribuidas()}
        </>
      )}

      {renderSpinner() && <Spinner />}
      <ScrollTop />
    </>
  );
};

export default Solicitaçoes;
