import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  getUsersAssists,
  getCompanyAssists,
} from '../../../redux/userFeatures/usersSlice';
import { getEmpresasAssociadas } from '../../../redux/empresaFeatures/empresaSlice';
import { api } from '../../../service/Service.api';

export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, userAssists, companyAssists } = useSelector(
    (state: any) => state.user
  );
  const { empresasAssociadas } = useSelector((state: any) => state.empresa);

  const [filtro, setfiltro] = useState('user');
  const [childFiltro, setChildFiltro] = useState<string>('todas');
  const [fixedFilter, setFixedFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [assistSelected, setAssistSelected] = useState<any>();
  const [empresaSelected, setEmpresaSelected] = useState<any>();

  const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void
  ) => {
    useEffect(() => {
      const handler = (event: any) => {
        if (!ref.current?.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener('mousedown', handler);

      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }, [ref, callback]);
  };

  const companyAssistsFil = companyAssists.filter((companyAssist: any) => {
    return companyAssist.cliente_nome === empresaSelected?.CompanyName;
  });

  const getSingleAssist = async (assistencia: number) => {
    try {
      const response = await api.get(`assistencias/${assistencia}`);
      return response.data;
    } catch (err: any) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    dispatch(getEmpresasAssociadas());
    dispatch(getUsersAssists(user.user.id));
    dispatch(getCompanyAssists());
  }, []);

  const userAssistsFiltered = userAssists
    .filter((assist: any) => {
      if (filtro === 'user' && childFiltro === 'todas') return assist;
      if (filtro === 'user' && childFiltro === 'concluidas')
        return assist.estado === 'done';
      if (filtro === 'user' && childFiltro === 'pendentes')
        return assist.estado === 'to do' && 'in progress';
    })
    .filter((item: any) => {
      if (search === '') return item;
      if (
        item.id.toString().includes(search.toLowerCase()) ||
        item.cliente_nome.toLowerCase().includes(search.toLowerCase()) ||
        item.cliente_nif.toLowerCase().includes(search.toLowerCase()) ||
        item.titulo.toLowerCase().includes(search.toLowerCase())
      )
        return item;
    });

  const companyAssistsFiltered = companyAssistsFil
    .filter((assist: any) => {
      if (filtro === 'cliente' && childFiltro === 'clienteTodas') return assist;
      if (filtro === 'cliente' && childFiltro === 'clienteConcluidas')
        return assist.estado === 'done';
      if (filtro === 'cliente' && childFiltro === 'clientePendentes')
        return assist.estado === 'to do' && 'in progress';
    })
    .filter((item: any) => {
      if (search === '') return item;
      if (
        item.id.toString().includes(search.toLowerCase()) ||
        item.cliente_nome.toLowerCase().includes(search.toLowerCase()) ||
        item.cliente_nif.toLowerCase().includes(search.toLowerCase()) ||
        item.titulo.toLowerCase().includes(search.toLowerCase())
      )
        return item;
    });

  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 300) {
        setFixedFilter(true);
      } else {
        setFixedFilter(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return {
    userAssists,
    filtro,
    setfiltro,
    userAssistsFiltered,
    fixedFilter,
    setFixedFilter,
    search,
    handleSearch,
    assistSelected,
    setAssistSelected,
    user,
    empresaSelected,
    setEmpresaSelected,
    empresasAssociadas,
    childFiltro,
    setChildFiltro,
    companyAssistsFiltered,
    getSingleAssist,
    useClickOutside,
  };
};
