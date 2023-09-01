import React, { useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { IoEllipsisVertical } from 'react-icons/io5';

import { LojaContainer, Overlay } from './loja';
import SideBarLoja from '../sideBar/SideBarLoja';
import ModalDelete from '../delete/ModalDelete';
import { useLoja } from '../../hooks/useLoja';
import { useCreateLoja } from '../../hooks/useCreateLoja';

interface Props {
  loja: any;
  setShowModal: any;
  setSelectedLoja: any;
  selectedLoja: any;
}

const SingleLoja: React.FC<Props> = ({
  loja,
  setShowModal,
  setSelectedLoja,
  selectedLoja,
}) => {
  const [showOptions, setShowOptions] = React.useState(false);
  let menuRef = useRef<any>(null);
  const { useClickOutside, handleDelete, deleteModal, setDeleteModal } =
    useLoja();

  useClickOutside(menuRef, () => {
    setShowOptions(false);
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
        <ModalDelete
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
