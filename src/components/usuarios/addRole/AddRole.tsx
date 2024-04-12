import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
  Container,
  Overlay,
  Header,
  Form,
  Select,
  SectionRoles,
  Label,
  FooterDiv,
} from './addRoleStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { api, apiCacimbo } from '../../../service/Service.api';
import Spinner from '../../spinner/Spinner';
import { AppDispatch } from '../../../redux/store';
import {
  getRoles,
  addRole,
  getUserRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';

interface IProps {
  setOpenAddRole: Dispatch<SetStateAction<boolean>>;
  openAddRole: boolean;
  userSelected: any;
  userEmpresas: any;
}

const AddRole: React.FC<IProps> = ({
  setOpenAddRole,
  userSelected,
  openAddRole,
  userEmpresas,
}) => {
  const [value, setValue] = useState({
    empresaSelecionada: '',
    role: '',
  });
  const [showRoles, setShowRoles] = useState(false);
  const [filteredRoles, setFilteredRoles] = useState<any>([]);
  const { rolesList } = useSelector((state: any) => state.permission);
  const [addRoleLoading, setAddRoleLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const handleOptionChange = async (event: any) => {
    const selectedValue = event.target.value;
    setValue({
      ...value,
      empresaSelecionada: selectedValue,
    });
  };

  const handleBlur = async () => {
    try {
      const response = await apiCacimbo.get(
        `docs_empresas/${value.empresaSelecionada}`
      );
      const companyData = response.data.data.CompanyID;

      if (companyData) {
        setFilteredRoles(
          rolesList.filter(
            (role: any) => role.companyId === value.empresaSelecionada
          )
        );
        console.log(filteredRoles);
        setShowRoles(true);
      } else {
        setShowRoles(false);
      }
    } catch (error) {
      setShowRoles(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setAddRoleLoading(true);
      await api.post(`users/${userSelected.id}/roles/add`, {
        role_id: value.role,
        companyId: value.empresaSelecionada,
      });
      getUserRoles(userSelected.id);
      setAddRoleLoading(false);
      setOpenAddRole(false);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <h2>Atribuir função ao usuário</h2>
          <IoCloseCircleOutline onClick={() => setOpenAddRole(false)} />
        </Header>

        <Form onSubmit={handleSubmit}>
          <Select
            value={value.empresaSelecionada}
            onChange={handleOptionChange}
            onBlur={handleBlur}
          >
            <option value=''>Selecione a empresa</option>
            {userEmpresas.map((item: any) => (
              <option key={item.CompanyID} value={item.CompanyID}>
                {item.CompanyName}
              </option>
            ))}
          </Select>

          <SectionRoles>
            <h2>Funções</h2>
            {showRoles === false ? (
              <Spinner />
            ) : (
              filteredRoles.map((role: any) => (
                <Label>
                  <input
                    type='checkbox'
                    name={role.name}
                    id={role.id}
                    value={role.id}
                    onChange={(e) => {
                      setValue({
                        ...value,
                        role: e.target.value,
                      });
                    }}
                  />
                  {role.name}
                </Label>
              ))
            )}
          </SectionRoles>

          <FooterDiv>
            <button type='reset' onClick={() => setOpenAddRole(false)}>
              Cancelar
            </button>
            <button type='submit' disabled={addRoleLoading}>
              {addRoleLoading ? 'Atribuindo...' : 'Atribuir'}
            </button>
          </FooterDiv>
        </Form>
      </Container>

      {openAddRole && <Overlay onClick={() => setOpenAddRole(false)} />}
    </>
  );
};

export default AddRole;
