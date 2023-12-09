import React, { useCallback, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import {
  Content,
  ErrorMsg,
  FooterDiv,
  Header,
  InputDiv,
  Inputs,
  ModalRolesContainer,
  Overlay,
  PermissionsDiv,
  Section,
} from './modalRolesStyles';
import { IoCloseCircleOutline, IoAddCircleOutline } from 'react-icons/io5';
import { useModalRoles } from './useModalRoles';
import Spinner from '../../spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  criarRole,
  getPermissions,
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';

interface ModalRolesProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRoles: React.FC<ModalRolesProps> = ({ openModal, setOpenModal }) => {
  const {
    handleBlur,
    handleChange,
    // handleSubmit,
    showPermissions,
    list,
    isLoading,
    setSearchCompanyId,
    searchCompanyId,
    value,
    checkedPermissions,
    setCheckedPermissions,
    handleSelect,
    errorMsg,
    user,
    setValue,
    setErrorMsg,
  } = useModalRoles();
  const dispatch = useDispatch<AppDispatch>();
  const [openPermissions, setOpenPermissions] = React.useState(
    new Array(list.length).fill(false)
  );

  const handlePermissionToggle = (index: number) => {
    const updatedPermissions = [...openPermissions];
    updatedPermissions[index] = !updatedPermissions[index];
    setOpenPermissions(updatedPermissions);
  };

  useEffect(() => {
    setCheckedPermissions(checkedPermissions);
  }, [checkedPermissions]);

  // useEffect(() => {
  //   dispatch(getPermissions(value.CompanyID));
  //   console.log(list);
  // }, []);

  const permissionsList = (items: any[]) => {
    let wrapper: any[] = [];
    items.map((item: any) => {
      if (Array.isArray(item)) {
        wrapper.push(...item);
      }
      wrapper.push(item);
    });

    return wrapper;
  };

  const renderPermissions = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return (
        <div>
          <label>
            <IoAddCircleOutline
              className='svg'
              onClick={() => handlePermissionToggle(index)}
            />

            <p>{item.name}</p>
            <input
              type='checkbox'
              value={item.id}
              name={item.name}
              onChange={(e) => handleSelect(e)}
              checked={(() => {
                return checkedPermissions?.includes(String(item.id));
              })()}
            />
          </label>

          {openPermissions[index] && (
            <Section>
              {item.payload.map((child: any) => (
                <label>
                  <input
                    type='checkbox'
                    value={child.id}
                    name={child.name}
                    onChange={(e) => handleSelect(e)}
                    checked={(() => {
                      return checkedPermissions?.includes(String(child.id));
                    })()}
                  />
                  <p>{child.name}</p>
                </label>
              ))}
            </Section>
          )}
        </div>
      );
    },
    [checkedPermissions?.length]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.name === '' || value.CompanyID === '') {
      setErrorMsg('Por favor preencha os campos vazios');
    } else {
      console.log(value, checkedPermissions);

      dispatch(
        criarRole({
          name: value.name,
          CompanyID: value.CompanyID,
          description: value.description,
          permissions: checkedPermissions,
        })
      ).then(() => {
        toast.success('Função criada com sucesso! 🎉', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });

      setTimeout(() => {
        setValue({
          CompanyID: '',
          name: '',
          description: '',
        });
        setCheckedPermissions([]);
        setOpenModal(false);
        dispatch(getRoles());
      }, 2000);
    }
  };

  return (
    <>
      <ModalRolesContainer className={openModal ? 'open' : ''}>
        <Header>
          <h2>Criar função</h2>
          <IoCloseCircleOutline onClick={() => setOpenModal(false)} />
        </Header>

        <form onSubmit={handleSubmit}>
          <Content>
            {user.user.parceiro_id === 1 ? (
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
            ) : null}

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

            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

            {isLoading ? (
              <Spinner />
            ) : (
              <PermissionsDiv>
                {showPermissions && <h2>Permissões</h2>}
                {showPermissions &&
                  permissionsList(list).map((permission: any, index: number) =>
                    renderPermissions({ item: permission, index: index })
                  )}
              </PermissionsDiv>
            )}
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

      <ToastContainer />
    </>
  );
};

export default ModalRoles;
