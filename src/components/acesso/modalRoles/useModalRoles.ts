import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { apiCacimbo } from '../../../service/Service.api';
import { getPermissions } from '../../../redux/permissionsFeatures/permissionSlice';

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

  return {
    handleBlur,
    handleChange,
    showPermissions,
    list,
    isLoading,
    setSearchCompanyId,
    value,
    searchCompanyId,
    errorMsg,
    user,
    openModal,
    setOpenModal,
    setValue,
    setErrorMsg,
  };
};
