import React, { useState, useEffect } from 'react';

import { ItemContainer, Container } from './stylesTarefas';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getTarefas } from '../../../redux/userFeatures/usersSlice';

const TarefasList: React.FC = () => {
  const { user, tarefas } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTarefas(user));
  }, []);

  return (
    <>
      <h1>Tarefas</h1>
      <Container>
        {tarefas.map((tarefa: any) => (
          <ItemContainer key={tarefa.id}>
            <h2>{tarefa.task}</h2>
            <p>{tarefa.ref}</p>
            <p>Criada em: {tarefa.created_at.substring(0, 10)}</p>
          </ItemContainer>
        ))}
      </Container>
    </>
  );
};

export default TarefasList;
