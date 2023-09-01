import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsersAssists } from '../../../redux/userFeatures/usersSlice';

export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, userAssists } = useSelector((state: any) => state.user);
  const [filtro, setfiltro] = useState('all');
  const [fixedFilter, setFixedFilter] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getUsersAssists(user.user.id));
  }, []);

  const userAssistsFiltered = userAssists
    .filter((assist: any) => {
      if (filtro === 'all') return assist;
      if (filtro === 'concluidas') return assist.estado === 'done';
      if (filtro === 'pendentes')
        return assist.estado === 'to do' && 'in progress';
    })
    .filter((item: any) => {
      if (search === '') return item;
      if (
        item.id.toString().includes(search.toLowerCase()) ||
        item.cliente_nome.toLowerCase().includes(search.toLowerCase()) ||
        item.cliente_nif.toLowerCase().includes(search.toLowerCase())
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
  };
};
