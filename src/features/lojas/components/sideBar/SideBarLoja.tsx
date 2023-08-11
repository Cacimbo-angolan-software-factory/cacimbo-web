import React from 'react';

import { Wrapper, Container, DivButtons, DivEmpty } from './sideBar';
import {
  IoStorefrontOutline,
  IoBusinessOutline,
  IoWalletOutline,
  IoCashOutline,
  IoCardOutline,
  IoSwapHorizontalOutline,
  IoFlowerOutline,
  IoPencilOutline,
  IoTrashBinOutline,
} from 'react-icons/io5';
import noPaymentMechanisms from '../../../../assets/noPaymentsMechanisms.svg';

interface IProps {
  menuRef: any;
  loja: any;
  setDeleteModal: any;
  selectedLoja: any;
  setShowModal: any;
}

const SideBarLoja: React.FC<IProps> = ({
  menuRef,
  loja,
  setDeleteModal,
  setShowModal,
}) => {
  return (
    <Wrapper ref={menuRef}>
      <Container>
        <img src={loja.StoreLogoUrl} alt='loja' />
        <h1>
          <IoStorefrontOutline />
          {loja.StoreName}
        </h1>
        <p>{loja.StoreSlogan}</p>
        <h2>
          <IoBusinessOutline />
          {loja?.company?.CompanyName}
        </h2>
        <h2>
          <IoWalletOutline />
          Formas de pagamento:
        </h2>
        <ul>
          {!loja.company.online_payments_mechanisms.length ? (
            <DivEmpty>
              <img
                className='svg'
                src={noPaymentMechanisms}
                alt='Sem formas de pagamento'
              />
              <p>Esta loja não possui formas de pagamento cadastradas.</p>
            </DivEmpty>
          ) : (
            loja?.company?.online_payments_mechanisms.map((payment: any) => (
              <li key={payment.id}>
                {payment.Mechanism === 'NU' ? (
                  <IoCashOutline />
                ) : payment.Mechanism === 'MB' ? (
                  <IoCardOutline />
                ) : payment.Mechanism === 'GPO' ? (
                  <IoFlowerOutline />
                ) : payment.Mechanism === 'TB' ? (
                  <IoSwapHorizontalOutline />
                ) : null}
                <p>{payment.Description}</p>
              </li>
            ))
          )}
        </ul>

        <DivButtons>
          <button onClick={() => setShowModal(true)}>
            <IoPencilOutline />
            Editar
          </button>
          <button onClick={() => setDeleteModal(true)}>
            <IoTrashBinOutline />
            Excluir
          </button>
        </DivButtons>
      </Container>
    </Wrapper>
  );
};

export default SideBarLoja;
