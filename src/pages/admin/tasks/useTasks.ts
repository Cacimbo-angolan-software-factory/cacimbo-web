import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsersAssists } from '../../../redux/userFeatures/usersSlice';

export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, userAssists } = useSelector((state: any) => state.user);
  const [filtro, setfiltro] = useState('all');
  const [fixedFilter, setFixedFilter] = useState(false);

  useEffect(() => {
    dispatch(getUsersAssists(user.user.id));
    console.log(userAssists);
  }, []);

  const userAssistsFiltered = userAssists.filter((assist: any) => {
    if (filtro === 'all') return assist;
    if (filtro === 'concluidas') return assist.estado === 'done';
    if (filtro === 'pendentes') return assist.estado === !'done';
  });

  return {
    userAssists,
    filtro,
    setfiltro,
    userAssistsFiltered,
    fixedFilter,
    setFixedFilter,
  };
};
