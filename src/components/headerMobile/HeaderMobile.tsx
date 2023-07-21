import React from 'react';
import { RiMenuLine } from 'react-icons/ri';

import { Container, UserLogo } from './styles';
import { useSelector } from 'react-redux';
import SideBarMobile from '../sideBarMobile/SideBarMobile';

const HeaderMobile: React.FC = () => {
  const { user } = useSelector((state: any) => state.user);
  const [showMenu, setShowMenu] = React.useState(false);

  function getFirstLetters(inputString: any) {
    const words = inputString.split(' ');
    const firstLetters = words.map((word: any) => word.charAt(0));
    const result = firstLetters.join('');
    return result;
  }

  return (
    <>
      <Container>
        <span onClick={() => setShowMenu(!showMenu)}>
          <RiMenuLine />
        </span>

        <UserLogo>
          <h1>{getFirstLetters(user.user.name)}</h1>
        </UserLogo>
      </Container>

      {showMenu && <SideBarMobile showMenu={showMenu} />}
    </>
  );
};

export default HeaderMobile;
