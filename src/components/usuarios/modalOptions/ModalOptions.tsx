import React from 'react';

import { Container } from './ModalOptionsStyles';

interface Props {
  setOpenPerfis: (openPerfis: boolean) => void;
  setOpenTarefas: (openTarefas: boolean) => void;
  modalRef?: React.MutableRefObject<any>;
}

const ModalOptions: React.FC<Props> = ({
  setOpenPerfis,
  modalRef,
  setOpenTarefas,
}) => {
  const handleOpenPerfis = () => {
    setOpenPerfis(true);
    setOpenTarefas(false);
  };

  const handleOpenTarefaas = () => {
    setOpenTarefas(true);
    setOpenPerfis(false);
  };

  const handleOpenAssistencias = () => {};

  return (
    <Container ref={modalRef}>
      <p onClick={handleOpenPerfis}>Perfis</p>
      <p onClick={handleOpenTarefaas}>Descrições de tarefas</p>
      <p>Tipos de assistencias</p>
    </Container>
  );
};

export default ModalOptions;
