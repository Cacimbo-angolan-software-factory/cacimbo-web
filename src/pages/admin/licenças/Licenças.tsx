import React, { useContext, useEffect, useState } from 'react';
import { LicContext } from '../../../context';
import Licence from '../../../components/licenças/Licence';

import { Div, FiltersContainer, InputSearch, Pagination } from './styles';
import Filters from '../../../components/licenças/filters/Filters';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import EmptyState from '../../../components/emptyState/EmptyState';
import Spinner from '../../../components/spinner/Spinner';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useDispatch, useSelector } from 'react-redux';
import { getEmpresas } from '../../../redux/solicitaçaoFeatures/solicSlice';
import { AppDispatch } from '../../../redux/store';
import SideBarLicence from '../../../components/licenças/sidebarLicences/SideBarLicence';

const Licenças: React.FC = () => {
  const { licences, loadingLicenses } = useContext(LicContext);
  const [fixedFilter, setFixedFilter] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [filtro, setFiltro] = useState('all');
  const [childFitro, setChildFiltro] = useState('todas');
  const [search, setSearch] = useState('');
  const { empresasList } = useSelector((state: any) => state.solicitaçao);
  const [licenceSelected, setLicenceSelected] = useState<any>();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(getEmpresas());
    console.log(licences);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const itemsPerPage = 50;
  const endOffset = pageNumber + itemsPerPage;

  const currentItems = licences.slice(endOffset, endOffset + itemsPerPage);

  const pageCount = Math.ceil(licences.length / itemsPerPage);
  let today = new Date().toISOString().slice(0, 10);
  const todasActivas = licences.filter(
    (licence) => licence.data_validade > today
  );
  const todasActivasPaginated = todasActivas.slice(
    endOffset,
    endOffset + itemsPerPage
  );
  const porRenovar = licences.filter(
    (licence) => licence.data_validade < today
  );
  const porRenovarPaginated = porRenovar.slice(
    endOffset,
    endOffset + itemsPerPage
  );

  // filter by partner
  const selectedPartner = licences.filter(
    (licence) => licence.parceiro_id === 1
  );
  const SelectedPartnerPaginated = selectedPartner.slice(
    endOffset,
    endOffset + itemsPerPage
  );
  const activasParceiro = selectedPartner.filter(
    (licence) => licence.data_validade > today
  );
  const activasParceiroPaginated = activasParceiro.slice(
    endOffset,
    endOffset + itemsPerPage
  );
  const porRenovarParceiro = selectedPartner.filter(
    (licence) => licence.data_validade < today
  );
  const porRenovarParceiroPaginated = porRenovarParceiro.slice(
    endOffset,
    endOffset + itemsPerPage
  );

  // get nif from empresasList
  const getNif = (nif: any) => {
    const empresa = empresasList.find(
      (empresaNif: any) => empresaNif.id === nif
    );

    return empresa?.nif;
  };

  // handling the filter
  const todos = () => {
    if (filtro === 'all' && childFitro === 'todas') {
      return (
        <div>
          {currentItems.length > 0 ? (
            currentItems
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.data_emissao
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.data_validade
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.cliente_nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  getNif(item.empresa_id).includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((licence) => (
                <div key={licence.id}>
                  <Licence
                    handleClick={handleClick}
                    setLicenceSelected={setLicenceSelected}
                    licence={licence}
                  />
                </div>
              ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handleTodasActivas = () => {
    if (filtro === 'all' && childFitro === 'activasAll') {
      return (
        <div>
          {todasActivasPaginated.length > 0 ? (
            todasActivasPaginated
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.data_emissao
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.data_validade
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.cliente_nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  getNif(item.empresa_id).includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((licence) => (
                <div key={licence.id}>
                  <Licence licence={licence} />
                </div>
              ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handlePorRenovar = () => {
    if (filtro === 'all' && childFitro === 'porRenovarAll') {
      return (
        <div>
          {porRenovarPaginated.length > 0 ? (
            porRenovarPaginated
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.data_emissao
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.data_validade
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.cliente_nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  getNif(item.empresa_id).includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((licence) => (
                <div key={licence.id}>
                  <Licence licence={licence} />
                </div>
              ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  // function to filter by partner
  const parceiro = () => {
    if (filtro === 'parceiro' && childFitro === 'parceiroTodas') {
      return (
        <div>
          {SelectedPartnerPaginated.length > 0 ? (
            SelectedPartnerPaginated.filter((item: any) => {
              if (search === '') {
                return item;
              } else if (
                item.data_emissao
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.data_validade
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.cliente_nome
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                getNif(item.empresa_id).includes(search.toLowerCase())
              ) {
                return item;
              }
            }).map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handleActivasParceiro = () => {
    if (filtro === 'parceiro' && childFitro === 'activasParceiro') {
      return (
        <div>
          {activasParceiroPaginated.length > 0 ? (
            activasParceiroPaginated
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.data_emissao
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.data_validade
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.cliente_nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  getNif(item.empresa_id).includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((licence) => (
                <div key={licence.id}>
                  <Licence licence={licence} />
                </div>
              ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handlePorRenovarParceiro = () => {
    if (filtro === 'parceiro' && childFitro === 'porRenovarParceiro') {
      return (
        <div>
          {porRenovarParceiroPaginated.length > 0 ? (
            porRenovarParceiroPaginated
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.data_emissao
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.data_validade
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.cliente_nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  getNif(item.empresa_id).includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((licence) => (
                <div key={licence.id}>
                  <Licence licence={licence} />
                </div>
              ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handlePageClick = (event: any) => {
    const newOffset =
      ((event as any).selected * itemsPerPage) % licences.length;
    setPageNumber(newOffset);
  };

  function onScroll() {
    if (window.scrollY >= 300) {
      setFixedFilter(true);
    } else {
      setFixedFilter(false);
    }
  }
  window.addEventListener('scroll', onScroll);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <FiltersContainer>
        <Filters
          filtro={filtro}
          setFiltro={setFiltro}
          childFiltro={childFitro}
          setChildFiltro={setChildFiltro}
          fixedFilter={fixedFilter}
        />
        <InputSearch
          onChange={handleSearch}
          value={search}
          type='text'
          placeholder='Pesquise licenças por nome, data ou nif...'
        />
      </FiltersContainer>

      <div>
        {todos && todos()}
        {handleTodasActivas && handleTodasActivas()}
        {handlePorRenovar && handlePorRenovar()}
        {parceiro && parceiro()}
        {handleActivasParceiro && handleActivasParceiro()}
        {handlePorRenovarParceiro && handlePorRenovarParceiro()}
      </div>
      <ScrollTop />

      {loadingLicenses && <Spinner />}
      {open && (
        <SideBarLicence>
          <Div>
            <h1>Licença id: {licenceSelected.id}</h1>
            <h3>{licenceSelected.cliente_nome}</h3>
          </Div>
        </SideBarLicence>
      )}

      <Pagination
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName={'active'}
      />
    </>
  );
};

export default Licenças;
