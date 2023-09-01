import React, { useEffect } from 'react';

import {
  Content,
  FooterDiv,
  Header,
  InputDiv,
  Inputs,
  ModalRolesContainer,
  Overlay,
  PermissionsDiv,
} from './modalRolesStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getPermissions } from '../../../redux/permissionsFeatures/permissionSlice';
import { apiCacimbo } from '../../../service/Service.api';
import PermissionsInModal from './PermissionsInModal';

interface ModalRolesProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRoles: React.FC<ModalRolesProps> = ({ openModal, setOpenModal }) => {
  const { user } = useSelector((state: any) => state.user);
  const { list, isLoading } = useSelector((state: any) => state.permission);
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = React.useState({
    name: '',
    CompanyID: user.user.lastCompanyIDUsed,
    description: '',
    permissions: [] as any,
  });
  // role_type
  // role_type_series
  const [searchCompanyId, setSearchCompanyId] = React.useState('');
  const [filteredPermissions, setFilteredPermissions] = React.useState([]);
  const [showPermissions, setShowPermissions] = React.useState(false);

  useEffect(() => {
    dispatch(getPermissions());
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleBlur = async () => {
    try {
      const response = await apiCacimbo.get(`docs_empresas/${searchCompanyId}`);
      const companyData = response.data.data.CompanyID;

      if (companyData) {
        setFilteredPermissions(
          list.filter(
            (permission: any) => permission.CompanyID === searchCompanyId
          )
        );
        setShowPermissions(true);
      } else {
        setShowPermissions(false);
      }
    } catch (error) {
      setShowPermissions(false);
    }
  };

  return (
    <>
      <ModalRolesContainer className={openModal ? 'open' : ''}>
        <Header>
          <h2>Criar função</h2>
          <IoCloseCircleOutline onClick={() => setOpenModal(false)} />
        </Header>

        <form onClick={handleSubmit}>
          <Content>
            <InputDiv>
              <p>Id da empresa</p>
              <input
                placeholder='Pesquise uma empresa...'
                name='searchCompanyId'
                value={searchCompanyId}
                onChange={(e: any) => setSearchCompanyId(e.target.value)}
                type='text'
                onBlur={handleBlur}
              />
            </InputDiv>

            <Inputs>
              <InputDiv>
                <p>Nome</p>
                <input
                  name='name'
                  value={value.name}
                  onChange={handleChange}
                  type='text'
                />
              </InputDiv>
              <InputDiv>
                <p>Descrição</p>
                <input
                  name='description'
                  value={value.description}
                  onChange={handleChange}
                  type='text'
                />
              </InputDiv>
            </Inputs>

            <PermissionsDiv>
              {showPermissions && <h2>Permissões</h2>}
              {showPermissions &&
                filteredPermissions.map((permission: any) => (
                  <PermissionsInModal
                    key={permission.id}
                    permission={permission}
                    value={value}
                    setValue={setValue}
                    isLoading={isLoading}
                  />
                ))}
            </PermissionsDiv>
          </Content>

          <FooterDiv
            className={showPermissions === false ? 'noPermission' : ''}
          >
            <button onClick={() => setOpenModal(false)}>Cancelar</button>
            <button type='submit'>Criar função</button>
          </FooterDiv>
        </form>
      </ModalRolesContainer>

      {openModal && <Overlay onClick={() => setOpenModal(false)} />}
    </>
  );
};

export default ModalRoles;
