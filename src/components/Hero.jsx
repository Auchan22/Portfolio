import { Box, Heading, useColorModeValue, Text, Icon } from '@chakra-ui/react';
import { BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';

import styles from './styles/styles.module.scss';

const variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.5,
    boxShadow: '10px 10px 39px -7px rgba(0,0,0,0.26)',
    cursor: 'pointer',
    transition: {
      duration: 0.5,
    },
  },
};

const stylesArrow = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backdropFilter: 'blur(10px)',
  backgroundColor: '#118ab2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const DownArrow = () => {
  let scroll = scroller;
  const handleScroll = () => {
    scroll.scrollTo('AboutMe', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <Box
      alignItems='center'
      aria-label='Boton scrolleable'
      bottom='15%'
      display='flex'
      flexDir='column'
      justifyContent='center'
      margin={{ base: '25% auto', md: '0px auto' }}
      minWidth='200px'
      position='relative'
    >
      <Text as='h5' mb='15px'>
        Conoceme un poco más
      </Text>
      <motion.div
        style={stylesArrow}
        variants={variants}
        whileHover='hover'
        onClick={handleScroll}
      >
        <Icon as={BsArrowDown} fontSize='35px' />
      </motion.div>
    </Box>
  );
};

const Hero = () => {
  return (
    <Box
      height={{ base: '90vh', md: '100vh' }}
      mb={{ base: '70px', md: 0 }}
      width='100vw'
    >
      <Box
        alignItems='center'
        // bgColor='red'
        display='flex'
        justifyContent='flex-start'
        margin='0px 10px'
        minHeight={{ base: '70%', md: '80%' }}
        width={{ base: '70%', md: '90%' }}
      >
        <Box marginLeft={{ base: 0, md: '15%' }} textAlign='left'>
          <Text
            className={styles.encabezadoProyectos}
            fontSize='25px'
            mb='20px'
          >
            Hola, yo soy
          </Text>
          <Heading as='h1' fontSize={{ base: '44px', md: '100px' }} mb='20px'>
            Agustin Surila
          </Heading>
          <Heading
            as='h3'
            color={useColorModeValue('#2a9d8f', '#005f73')}
            size='2xl'
          >
            Front-end Developer
          </Heading>
          <Text
            fontWeight='500'
            maxHeight={{ base: '200px' }}
            mt='20px'
            width={{ base: '300px', md: '600px' }}
          >
            Soy un joven autodidacta, en busca de aprender cada día cosas nuevas
            y desarrollarme como el mejor de mi área. Actualmente, me encuentro
            buscando mi primer empleo, con muchas ansías de trabajar en equipo.
          </Text>
        </Box>
      </Box>

      <DownArrow />
    </Box>
  );
};

export default Hero;
