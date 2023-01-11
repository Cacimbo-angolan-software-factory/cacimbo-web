import React, { useState, useEffect, useContext } from 'react';
import { LicContext } from '../../../context';
import { api } from '../../../service/Service.api';
import { Button, Div, Form, H1 } from './sidebarEmpresaStyles';

interface SideBarEditarProps {
  setShowEditar: React.Dispatch<React.SetStateAction<boolean>>;
  empresa: Empresa;
}

interface Empresa {
  id: number;
  Nome: string;
  Responsavel: string;
  email: string;
  telefone: string;
  Nif: string;
  ProvinciaSede: string;
}

export default function SideBarEditar({
  setShowEditar,
  empresa,
}: SideBarEditarProps) {
  const { editEmpresa, loadingEditar } = useContext(LicContext);
  const [formData, setFormData] = useState({
    nome: '',
    responsavel: '',
    email: '',
    telefone: '',
    nif: '',
    sede: '',
  });

  useEffect(() => {
    setFormData({
      nome: empresa.Nome || '',
      responsavel: empresa.Responsavel || '',
      email: empresa.email || '',
      telefone: empresa.telefone || '',
      nif: empresa.Nif || '',
      sede: empresa.ProvinciaSede || '',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (id: number) => {
    editEmpresa &&
      editEmpresa(id, formData)
        .then(() => {
          setShowEditar(false);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div>
      <H1>Editar empresa</H1>

      <Form>
        <div>
          <label htmlFor='nome'>Nome</label>
          <input
            onChange={handleChange}
            value={formData.nome}
            name='nome'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='responsavel'>Responsável</label>
          <input
            onChange={handleChange}
            value={formData.responsavel}
            name='responsavel'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            name='email'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='telefone'>Telefone</label>
          <input
            onChange={handleChange}
            value={formData.telefone}
            name='telefone'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input
            onChange={handleChange}
            value={formData.nif}
            name='nif'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='sede'>Provincia sede</label>
          <input
            onChange={handleChange}
            value={formData.sede}
            name='sede'
            type='text'
          />
        </div>
      </Form>

      <Div>
        <Button onClick={() => setShowEditar(false)}>Cancelar</Button>
        <Button
          onClick={() => {
            !loadingEditar && handleEdit(empresa.id);
          }}
        >
          {loadingEditar ? 'Aguarde...' : 'Guardar'}
        </Button>
      </Div>
    </div>
  );
}
