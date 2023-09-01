import React, { useContext, useEffect, useState } from 'react';
import { LicContext } from '../../../context';
import Licence from '../../../components/licenças/Licence';

import { Div, FiltersContainer, InputSearch, Overlay } from './styles';
import Filters from '../../../components/licenças/filters/Filters';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import EmptyState from '../../../components/emptyState/EmptyState';
import Spinner from '../../../components/spinner/Spinner';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useDispatch, useSelector } from 'react-redux';
import { getEmpresas } from '../../../redux/solicitaçaoFeatures/solicSlice';
import { AppDispatch } from '../../../redux/store';
import ModalParceiros from '../../../components/licenças/modalParceiros/ModalParceiros';

const Licenças: React.FC = () => {
  const { licences, loadingLicenses } = useContext(LicContext);
  const [fixedFilter, setFixedFilter] = useState(false);
  const [filtro, setFiltro] = useState('all');
  const [childFitro, setChildFiltro] = useState('todas');
  const [search, setSearch] = useState('');
  const { empresasList } = useSelector((state: any) => state.solicitaçao);
  const [open, setOpen] = useState(false);
  const [openModalParceiros, setOpenModalParceiros] = useState(false);
  const [empresaSelected, setEmpresaSelected] = useState<any>();

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(getEmpresas());
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  let today = new Date().toISOString().slice(0, 10);
  const todasActivas = licences.filter(
    (licence) => licence.data_validade > today
  );
  const porRenovar = licences.filter(
    (licence) => licence.data_validade < today
  );

  // filter by partner
  const licencasDeParceiro = licences.filter((licence) => {
    return licence.parceiro_id === empresaSelected?.id;
  });

  const activasParceiro = licencasDeParceiro.filter(
    (licence) => licence.data_validade > today
  );

  const porRenovarParceiro = licencasDeParceiro.filter(
    (licence) => licence.data_validade < today
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
          {licences.length > 0
            ? licences
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
            : !loadingLicenses && (
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
          {todasActivas.length > 0
            ? todasActivas
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
            : !loadingLicenses && (
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
          {porRenovar.length > 0
            ? porRenovar
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
            : !loadingLicenses && (
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
          {licencasDeParceiro.length > 0
            ? licencasDeParceiro
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
            : !loadingLicenses && (
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
          {activasParceiro.length > 0
            ? activasParceiro
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
            : !loadingLicenses && (
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
          {porRenovarParceiro.length > 0
            ? porRenovarParceiro
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
            : !loadingLicenses && (
                <EmptyState>
                  <h2>Não existem licenças</h2>
                </EmptyState>
              )}
        </div>
      );
    }
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
          openModalParceiros={openModalParceiros}
          setOpenModalParceiros={setOpenModalParceiros}
          empresaSelected={empresaSelected}
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

      {openModalParceiros && (
        <ModalParceiros
          openModalParceiros={openModalParceiros}
          setOpenModalParceiros={setOpenModalParceiros}
          setEmpresaSelected={setEmpresaSelected}
          empresaSelected={empresaSelected}
        />
      )}
      {openModalParceiros && (
        <Overlay onClick={() => setOpenModalParceiros(false)} />
      )}
    </>
  );
};

export default Licenças;
