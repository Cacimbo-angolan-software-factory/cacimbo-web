import React from 'react';

import { Button, Div, Form, H1 } from './sidebarEmpresaStyles';

interface SideBarEditarProps {
  setShowEditar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBarEditar({ setShowEditar }: SideBarEditarProps) {
  return (
    <div>
      <H1>Editar empresa</H1>

      <Form>
        <div>
          <label htmlFor='nome'>Nome</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='responsavel'>Responsável</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='telefone'>Telefone</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='sede'>Provincia sede</label>
          <input type='text' />
        </div>
      </Form>

      <Div>
        <Button onClick={() => setShowEditar(false)}>Cancelar</Button>
        <Button>Guardar</Button>
      </Div>
    </div>
  );
}
