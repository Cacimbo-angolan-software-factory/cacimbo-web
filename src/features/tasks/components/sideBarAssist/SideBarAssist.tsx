import React, { MutableRefObject } from 'react';

import { Estado, Main, Section, Span, Tasks } from './SideBarAssistStyles';
import {
  IoCalendarOutline,
  IoPeopleOutline,
  IoCheckmarkDoneCircleOutline,
  IoTimeOutline,
  IoCloseCircleOutline,
  IoPlayCircleOutline,
  IoDocumentOutline,
  IoPersonOutline,
  IoIdCardOutline,
} from 'react-icons/io5';

interface IProps {
  assistSelected: any;
  menuRef: MutableRefObject<any>;
}

const SideBarAssist: React.FC<IProps> = ({ assistSelected, menuRef }) => {
  return (
    <Main ref={menuRef}>
      <h1>
        {assistSelected.titulo} - {assistSelected.id}
      </h1>

      <Section>
        <p>
          <IoPeopleOutline />
          {assistSelected.empresaNome}
        </p>
        <p>
          <IoCalendarOutline />
          {assistSelected.data}
        </p>
        <p>
          <Span
            className={
              assistSelected.prioridade === 'baixa'
                ? 'blue'
                : assistSelected.prioridade === 'normal'
                ? 'green'
                : 'red'
            }
          ></Span>
          Prioridade {assistSelected.prioridade}
        </p>

        {assistSelected.estado === 'done' && (
          <Estado>
            <IoCheckmarkDoneCircleOutline className='done' /> Concluída
          </Estado>
        )}
        {assistSelected.estado === 'canceled' && (
          <Estado>
            <IoCloseCircleOutline className='canceled' /> Cancelada
          </Estado>
        )}
        {assistSelected.estado === 'in progress' && (
          <Estado>
            <IoTimeOutline className='inProgress' /> Em progresso
          </Estado>
        )}
        {assistSelected.estado === 'to do' && (
          <Estado>
            <IoPlayCircleOutline className='toDo' /> Por fazer
          </Estado>
        )}

        <Tasks>
          <h1>Tarefas</h1>
          {assistSelected?.tasks.map((item: any) => (
            <div>
              <section>
                <p>
                  <IoDocumentOutline /> {item.tarefa}
                </p>
                <p>
                  <IoIdCardOutline /> {item.task_texto_id}
                </p>
                <p>
                  <IoPersonOutline /> {item.user.name}
                </p>
              </section>
              <section>
                <p>{item.inicio}</p>
                <p>{item.fim}</p>
              </section>
            </div>
          ))}
        </Tasks>
      </Section>
    </Main>
  );
};

export default SideBarAssist;
