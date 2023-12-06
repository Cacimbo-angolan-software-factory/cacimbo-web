import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { apiCacimbo } from '../../../service/Service.api';
import {
  criarRole,
  getPermissions,
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';
import { toast } from 'react-toastify';

export const useModalRoles = () => {
  const { user } = useSelector((state: any) => state.user);
  const { list, isLoading } = useSelector((state: any) => state.permission);
  const [searchCompanyId, setSearchCompanyId] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState({
    name: '',
    CompanyID: user.user.lastCompanyIDUsed,
    description: '',
  });
  const [showPermissions, setShowPermissions] = useState(false);
  const [checkedPermissions, setCheckedPermissions] = useState<any>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleBlur = async () => {
    try {
      const response = await apiCacimbo.get(`docs_empresas/${searchCompanyId}`);
      const companyData = response.data.data.CompanyID;

      if (companyData) {
        dispatch(getPermissions(companyData));
        setShowPermissions(true);
      } else {
        setShowPermissions(false);
      }
    } catch (error) {
      setShowPermissions(false);
    }
  };

  const handleSelect = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked && !checkedPermissions.includes(value)) {
      setCheckedPermissions([...checkedPermissions, value]);
    } else {
      const filteredList = checkedPermissions.filter(
        (item: any) => item !== value
      );
      setCheckedPermissions(filteredList);
    }
  };

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
      );

      setTimeout(() => {
        setValue({
          CompanyID: '',
          name: '',
          description: '',
        });
        setCheckedPermissions([]);
        setOpenModal(false);
        dispatch(getRoles);
        console.log('counting');
      }, 2000);
    }
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    showPermissions,
    list,
    isLoading,
    setSearchCompanyId,
    value,
    searchCompanyId,
    checkedPermissions,
    setCheckedPermissions,
    handleSelect,
    errorMsg,
    user,
    openModal,
    setOpenModal,
  };
};
