import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { deleteLoja, getLojas } from '../../../redux/lojasFeatures/lojasSlice';
import { toast } from 'react-toastify';

export const useLoja = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(false);

  const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void
  ) => {
    useEffect(() => {
      const handler = (event: any) => {
        if (!ref.current?.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener('mousedown', handler);

      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }, [ref, callback]);
  };

  const handleDelete = (id: any) => {
    setDeleteInProgress(true);
    dispatch(deleteLoja(id))
      .then(() => {
        toast.success('Loja excluída com sucesso! 🎉', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      })
      .finally(() => {
        setDeleteInProgress(false);
        dispatch(getLojas());
        setDeleteModal(false);
      });
  };

  return {
    useClickOutside,
    handleDelete,
    deleteModal,
    setDeleteModal,
    deleteInProgress,
  };
};
