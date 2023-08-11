import React, { useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { IoTrashOutline, IoEllipsisVertical } from 'react-icons/io5';

import { LojaContainer, Overlay } from './loja';
import DeleteModal from '../../../../pages/admin/lojas/DeleteModal';
import SideBarLoja from '../sideBar/SideBarLoja';
import {
  deleteLoja,
  getLojas,
} from '../../../../redux/lojasFeatures/lojasSlice';
import { AppDispatch } from '../../../../redux/store';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

interface Props {
  loja: any;
  setDeleteModal: any;
  deleteModal: any;
  setSelectedLoja: any;
  selectedLoja: any;
  setShowModal: any;
}

const SingleLoja: React.FC<Props> = ({
  loja,
  setDeleteModal,
  deleteModal,
  setSelectedLoja,
  selectedLoja,
  setShowModal,
}) => {
  const [showOptions, setShowOptions] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);

  const handleDelete = (id: any) => {
    dispatch(deleteLoja(id)).then(() => {
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
    });
    dispatch(getLojas());
    setDeleteModal(false);
  };

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <>
      <LojaContainer>
        <img src={loja.StoreLogoUrl} alt='loja' />

        <section>
          <div>
            <h1
              onClick={() => {
                setShowOptions(true);
                setSelectedLoja(loja);
              }}
            >
              {loja.StoreName}
            </h1>
            <p>{loja.StoreSlogan}</p>
            <p>{loja.CompanyID}</p>
          </div>

          <div>
            <span
              onClick={() => {
                setShowOptions(true);
                setSelectedLoja(loja);
              }}
            >
              <IoEllipsisVertical />
            </span>
          </div>
        </section>
      </LojaContainer>

      {showOptions && (
        <SideBarLoja
          setDeleteModal={setDeleteModal}
          loja={loja}
          menuRef={menuRef}
          selectedLoja={selectedLoja}
          setShowModal={setShowModal}
        />
      )}

      {deleteModal && (
        <DeleteModal
          loja={selectedLoja}
          deleteLoja={handleDelete}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
        />
      )}

      {deleteModal && <Overlay onClick={() => setDeleteModal(false)} />}
    </>
  );
};

export default SingleLoja;