import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { apiCacimbo } from '../../../service/Service.api';
import { getPermissions } from '../../../redux/permissionsFeatures/permissionSlice';

export const useModalRoles = () => {
  const { user } = useSelector((state: any) => state.user);
  const { list, isLoading } = useSelector((state: any) => state.permission);
  const [searchCompanyId, setSearchCompanyId] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const [selectedEmpresa, setSelectedEmpresa] = useState<any>({});
  const [value, setValue] = useState({
    name: '',
    CompanyID: selectedEmpresa?.CompanyID,
    description: '',
  });
  const [showPermissions, setShowPermissions] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (selectedEmpresa?.CompanyID) {
      dispatch(getPermissions(selectedEmpresa.CompanyID));
      // setShowPermissions(true);

      setValue((prevValue) => ({
        ...prevValue,
        CompanyID: selectedEmpresa?.CompanyID,
      }));
    }
  }, [selectedEmpresa]);

  return {
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
    setShowPermissions,
    selectedEmpresa,
    setSelectedEmpresa,
  };
};
