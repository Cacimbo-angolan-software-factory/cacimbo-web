import React from 'react';

import { Container, Span } from './tarefaStyles';
import {
  IoCalendarOutline,
  IoArchiveOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
} from 'react-icons/io5';

interface Props {
  assist: any;
  filtro: string;
}

const Tarefa: React.FC<Props> = ({ assist, filtro }) => {
  return (
    <Container>
      <h3>
        {assist.titulo} - {assist.id}
      </h3>
      <p>
        <IoDocumentTextOutline />
        {assist.cliente_nif}
      </p>
      <p>
        <IoPeopleOutline />
        {assist.cliente_nome}
      </p>
      <p>
        <IoArchiveOutline />
        {assist.destinatario}
      </p>
      <p className='date'>
        <IoCalendarOutline />
        {assist.data}
      </p>
      <Span
        className={
          assist.prioridade === 'baixa'
            ? 'blue'
            : assist.prioridade === 'normal'
            ? 'green'
            : 'red'
        }
      ></Span>
    </Container>
  );
};

export default Tarefa;
