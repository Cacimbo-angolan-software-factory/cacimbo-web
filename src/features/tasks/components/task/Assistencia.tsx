import React, { Dispatch, useEffect } from 'react';

import { Container, DivBottom, Span } from './tarefaStyles';
import {
  IoCalendarOutline,
  IoArchiveOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoOpenOutline,
} from 'react-icons/io5';

interface Props {
  assist: any;
  filtro: string;
  setAssistSelected: Dispatch<any>;
  assistSelected: any;
}

const Assistencia: React.FC<Props> = ({
  assist,
  filtro,
  setAssistSelected,
  assistSelected,
}) => {
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
      <DivBottom>
        <Span
          className={
            assist.prioridade === 'baixa'
              ? 'blue'
              : assist.prioridade === 'normal'
              ? 'green'
              : 'red'
          }
        ></Span>
        <button onClick={() => setAssistSelected(assist)}>
          <IoOpenOutline />
        </button>
      </DivBottom>
    </Container>
  );
};

export default Assistencia;
