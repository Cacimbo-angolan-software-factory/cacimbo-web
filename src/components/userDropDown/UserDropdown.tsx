import React from 'react';

import { Container, Wrapper } from './stylesUserDropdown';
import { useDispatch, useSelector } from 'react-redux';
import {
  IoKeyOutline,
  IoLogOutOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { AppDispatch } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userFeatures/usersSlice';

const UserDropDown: React.FC = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/Login');
  };

  return (
    <Wrapper>
      <Container className='item'>
        <IoPeopleOutline />
        {user.user.name}

        <ul>
          <Link to='/NovaPalavraPasse'>
            <li>
              <IoKeyOutline /> Mudar palavra-passe
            </li>
          </Link>
          <li onClick={handleLogout}>
            <IoLogOutOutline /> Terminar sessão
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default UserDropDown;
