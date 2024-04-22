import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  criarLoja,
  getCompanyIdWithNif,
  getLojas,
} from '../../../redux/lojasFeatures/lojasSlice';
import { api, apiCacimbo } from '../../../service/Service.api';
import { toast } from 'react-toastify';

type FormDataOrNull = FormData | null;

export const useCreateLoja = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedLoja, setSelectedLoja] = useState<any>(null);
  const [value, setValue] = useState({
    nif: '',
    CompanyID: '',
    StoreName: '',
    StoreSlogan: '',
    ArmazemID: 0 as any,
    payments_mechanisms: [] as any,
  });
  const [StoreLogoUrl, setStoreLogoUrl] = useState<FormDataOrNull>(null);
  // const [paymentMechanismsList, setPaymentMechanismsList] = useState<any>([]);
  const [loadingOnBlur, setLoadingOnBlur] = useState(false);
  const { companyIds, isLoading, paymentMethods } = useSelector(
    (state: any) => state.lojas
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = async () => {
    if (!value.nif) {
      setValue({
        ...value,
        CompanyID: '',
        StoreName: '',
      });
    }

    try {
      setLoadingOnBlur(true);
      const response = await apiCacimbo.get(
        `docs_empresas/all-by-nif/${value.nif}`
      );
      const company = response.data.data[0];
      console.log(response.data.data[0]);
      dispatch(getCompanyIdWithNif(value.nif));
      setLoadingOnBlur(false);

      if (company) {
        setValue({
          ...value,
          CompanyID: company.CompanyID,
          StoreName: company.CompanyName,
        });
      }
    } catch (error: any) {
      setLoadingOnBlur(false);
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      value.CompanyID === '' ||
      value.StoreName === '' ||
      StoreLogoUrl === null
    ) {
      toast.error('Preencha todos os campos!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    } else {
      const formData = new FormData();
      formData.append('StoreLogoUrl', StoreLogoUrl as any);
      formData.append('StoreName', value.StoreName);
      formData.append('StoreSlogan', value.StoreSlogan);
      formData.append('CompanyID', value.CompanyID);
      formData.append('ArmazemID', value.ArmazemID);
      formData.append(
        'payments_mechanisms',
        JSON.stringify(value.payments_mechanisms)
      );

      dispatch(criarLoja(formData)).then(() => {
        toast.success('Loja criada com sucesso! 🎉', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        setTimeout(() => {
          setValue({
            nif: '',
            CompanyID: '',
            StoreName: '',
            StoreSlogan: '',
            ArmazemID: 0,
            payments_mechanisms: [] as any,
          });
          setStoreLogoUrl(null);
          dispatch(getLojas());
        }, 2000);
      });
    }
  };

  const handleOptionChange = (e: any) => {
    const selectedValue = e.target.value;
    setValue({
      ...value,
      CompanyID: selectedValue,
    });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, method: any) => {
    if (e.target.checked) {
      const updatedMethods = {
        Mechanism: method.Mechanism,
        Description: method.Description,
      };
      // setPaymentMechanismsList([...paymentMechanismsList, updatedMethods]);
      setValue({
        ...value,
        payments_mechanisms: [...value.payments_mechanisms, updatedMethods],
      });
    } else {
      const updatedMethods = value.payments_mechanisms.filter(
        (method: any) => method.Mechanism !== method.Mechanism
      );
      // setPaymentMechanismsList(updatedMethods);
      setValue({
        ...value,
        payments_mechanisms: updatedMethods,
      });
    }
  };

  return {
    value,
    setValue,
    handleChange,
    handleSubmit,
    StoreLogoUrl,
    setStoreLogoUrl,
    // paymentMechanismsList,
    // setPaymentMechanismsList,
    loadingOnBlur,
    companyIds,
    isLoading,
    paymentMethods,
    handleBlur,
    handleOptionChange,
    handleCheck,
  };
};
