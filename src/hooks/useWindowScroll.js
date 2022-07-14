import React, { useState, useEffect } from 'react';

const useWindowScroll = () => {
  const [y, setY] = useState(0);

  const handleScroll = (e) => {
    const window = e.currentTarget;

    setY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e));
    console.log(y);

    return () => {
      window.removeEventListener('scroll', (e) => handleScroll(e));
    };
  }, [y]);

  return y;
};

export default useWindowScroll;
