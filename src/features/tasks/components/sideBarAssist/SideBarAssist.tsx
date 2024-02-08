import React, { MutableRefObject, useState } from 'react';

import {
  Button,
  Estado,
  Main,
  Section,
  Span,
  Tasks,
} from './SideBarAssistStyles';
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
import SideBarMap from './SideBarMap';

interface IProps {
  assistSelected: any;
  menuRef: MutableRefObject<any>;
}

const SideBarAssist: React.FC<IProps> = ({ assistSelected, menuRef }) => {
  const [showMap, setShowMap] = useState(false);

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
              <p>
                <IoDocumentOutline /> {item.tarefa}
              </p>
              <p>
                <IoIdCardOutline /> {item.task_texto_id}
              </p>
              <p>
                <IoPersonOutline /> {item.user.name}
              </p>

              <p>Inicío: {item.inicio}</p>
              <p>fim: {item.fim}</p>
            </div>
          ))}
        </Tasks>

        <Button onClick={() => setShowMap(!showMap)}>
          {!showMap ? 'Mostrar tarefas no mapa' : 'fechar mapa'}
        </Button>

        {showMap ? (
          assistSelected.gps_lat === null &&
          assistSelected.gps_long === null ? (
            <SideBarMap
              gpsLat={assistSelected.gps_lat}
              gpsLong={assistSelected.gps_long}
            />
          ) : (
            <p>Sem coordenadas disponíveis para estas tarefas</p>
          )
        ) : null}
      </Section>
    </Main>
  );
};

export default SideBarAssist;
