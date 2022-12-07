import React, { useState } from 'react';

import { Button } from './ScrollTopStyles';
import { IoArrowUpOutline } from 'react-icons/io5';

const ScrollTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Button
      style={{
        display: showScroll ? 'flex' : 'none',
      }}
      onClick={scrollTop}
    >
      <IoArrowUpOutline />
    </Button>
  );
};

export default ScrollTop;
