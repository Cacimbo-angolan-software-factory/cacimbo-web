import React, { useEffect, useRef } from 'react';
import { IoTrashOutline, IoEllipsisVertical } from 'react-icons/io5';

import { LojaContainer, Overlay } from './lojasStyles';
import DeleteModal from './DeleteModal';
import SideBarLoja from '../../../components/lojas/sideBarLojas/SideBarLoja';
import { deleteLoja, getLojas } from '../../../redux/lojasFeatures/lojasSlice';
import { AppDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';

interface Props {
  loja: any;
  setDeleteModal: any;
  deleteModal: any;
  setSelectedLoja: any;
  selectedLoja: any;
  setShowModal: any;
}

const Loja: React.FC<Props> = ({
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
    dispatch(deleteLoja(id));

    setTimeout(() => {
      dispatch(getLojas());
      setDeleteModal(false);
    }, 1000);
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
            <h1>{loja.StoreName}</h1>
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

export default Loja;
