import { useState } from 'react';
import { useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

import useWindowScroll from '../hooks/useWindowScroll';

const Logros = () => {
  const toast = useToast();
  const y = useWindowScroll();
  let totalSize = document.documentElement.scrollHeight;
  const [achivements, setAchivements] = useState();

  // console.log(JSON.parse(localStorage.getItem('achivements')));

  useEffect(() => {
    setTimeout(() => {
      setAchivements(JSON.parse(localStorage.getItem('achivements')));
    }, 1000);
  }, []);

  // console.log(achivements);

  setTimeout(() => {
    if (y === 0 && !achivements[0]?.active) {
      const { datos } = achivements[0];

      toast({
        title: datos.title,
        description: datos.description,
        status: datos.status,
        duration: 5000,
        isClosable: true,
        id: achivements[0].id,
        position: 'top-right',
      });
      achivements[0].active = true;
      // console.log(achivements);
      localStorage.setItem('achivements', JSON.stringify(achivements));
    }
  }, 2000);
};

export default Logros;
