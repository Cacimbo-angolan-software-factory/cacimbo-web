import React, { useState, useEffect, useRef } from 'react';

import { ItemContainer, Container, TopDiv } from './stylesTarefas';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getTarefas } from '../../../redux/userFeatures/usersSlice';
import {
  IoAddCircleOutline,
  IoPencilOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import SideBarUsuario from '../sideBarsUsuarios/SideBarUsuario';
import TarefasSideBarContainer from '../sideBarsUsuarios/TarefasSideBarContainer';

const TarefasList: React.FC = () => {
  const { user, tarefas } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [activeTab, setActiveTab] = useState('create');
  let menuRef = useRef<any>(null);

  useEffect(() => {
    dispatch(getTarefas(user));
  }, []);

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const handleOpenEdit = () => {
    setOpen(true);
    setActiveTab('edit');
  };

  const handleOpenCreate = () => {
    setOpen(true);
    setActiveTab('create');
  };

  return (
    <>
      <TopDiv>
        <h1>Tarefas</h1>
        <span onClick={handleOpenCreate}>
          <IoAddCircleOutline />
        </span>
      </TopDiv>

      <Container>
        {tarefas.map((tarefa: any) => (
          <ItemContainer key={tarefa.id}>
            <div>
              <h2>{tarefa.task}</h2>
              <p>{tarefa.ref}</p>
              <p>Criada em: {tarefa.created_at.substring(0, 10)}</p>
            </div>

            <div>
              <IoPencilOutline onClick={handleOpenEdit} />
              <IoTrashOutline />
            </div>
          </ItemContainer>
        ))}
      </Container>

      {open && (
        <SideBarUsuario menuRef={menuRef}>
          <TarefasSideBarContainer
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </SideBarUsuario>
      )}
    </>
  );
};

export default TarefasList;
