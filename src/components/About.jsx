import {
  Box,
  Container,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Img,
  chakra,
  List,
  ListIcon,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { Element } from 'react-scroll';

import CV from '../../public/CV-agus-surila.pdf';
import { TEC } from '../json/icons';
import imagenPerfil from '../../public/ImagenPerfil.png';

import styles from './styles/styles.module.scss';

const variants = {
  hidden: {
    width: 0,
    borderTopWidth: '6px',
  },
  show: {
    width: ['0%', '100%'],
    borderTopWidth: '6px',
  },
};

const HighlightText = ({ content }) => {
  return (
    <chakra.span
      _hover={{
        filter: 'auto',
        brightness: '150%',
        fontWeight: 'bold',
        transition: 'all 250ms ease',
      }}
      color='#2a9d8f'
    >
      {content}
    </chakra.span>
  );
};

const About = () => {
  return (
    <Element name='AboutMe'>
      <Container minWidth={{ base: '90vw', md: '60vw' }} mt={6}>
        <Box>
          <Heading
            alignItems={{ base: 'center' }}
            as='h1'
            className={{ base: 0, md: styles.sectionTitle }}
            color={useColorModeValue('#000000', '#ffffff')}
            display={{ base: 'flex' }}
            size='2xl'
          >
            Sobre Mí
          </Heading>
          {/* <motion.hr 
                    color={useColorModeValue('#251D3', '#125B50')}
                    variants={variants} 
                    initial='hidden' 
                    whileInView='show' 
                    viewport={{ once: true }} 
                    transition={{delay: 2}}
                /> */}
        </Box>
        <Box
          alignItems='center'
          display='flex'
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent='center'
          maxWidth={{ base: '100%', md: '100%' }}
          mt='20px'
          px={0}
        >
          <Box mr={{ base: 0, md: '20px' }}>
            <Text fontSize={20} letterSpacing={1} mb='10px'>
              Hola, mi nombre es <HighlightText content='Agustin' />, ¡Quiero
              que me conozcas!. Mi pasión por el desarrollo web surge durante el
              año 2020, durante la 1er etapa de aislamiento del Covid-19 en
              Argentina. Tuve mis inicios en PHP, por recomendación de mi padre
              (Analista en Sistemas), pero termine escogiendo el camino del
              desarrollo web.
            </Text>
            <Text fontSize={20} letterSpacing={1} mb='10px'>
              Al dia de hoy, curso el 1er año de la carrera de{' '}
              <HighlightText content='Licenciatura en sistemas' /> en la
              Facultad de Informatica de la UNLP
            </Text>
            <Button
              _hover={{
                backgroundColor: useColorModeValue('#000000', '#ffffff'),
                outline: `3px solid ${useColorModeValue('#000000', '#ffffff')}`,
                outlineOffset: '3px',
                transition: 'all 100ms ease',
              }}
              aria-label='Boton de descarga Currículum'
              as='a'
              backgroundColor={useColorModeValue('#000000', '#ffffff')}
              borderRadius={50}
              color={useColorModeValue('#ffffff', '#000000')}
              download='CV-AgusSurila'
              fontSize='20px'
              height='60px'
              href={CV}
              rightIcon={<DownloadIcon />}
            >
              Descargar CV
            </Button>
          </Box>
          <Img
            alt='Foto personal'
            borderRadius='md'
            height={{ base: '300px', md: '400px' }}
            mt={{ base: '20px', md: 0 }}
            src={imagenPerfil}
            width={{ base: '300px', md: '400px' }}
          />
        </Box>
        <Box
          alignItems='center'
          display='flex'
          flexDir='column'
          justifyContent='center'
          maxWidth={{ base: '100%', md: '100%' }}
          mt='20px'
        >
          <Text fontSize={20} letterSpacing={1} mb='10px'>
            Mi proyecto es poder desarrollarme como un desarrollador{' '}
            <HighlightText content='Fullstack MERN' />, por lo que dia a dia
            sigo aprendiendo nuevas tecnologías:
          </Text>
          <List
            bgColor={useColorModeValue('#edede9', '#4a4e69')}
            borderRadius='15px'
            padding={{ base: '10px', md: '15px' }}
            spacing={3}
          >
            {TEC.map((el, index) => (
              <ListIcon
                key={index}
                _hover={{ color: el.color, transition: 'all 250ms ease' }}
                as={el.icon}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('#4a4e69', '#cad2c5')}
                fontSize='50px'
                mx={2}
              />
            ))}
          </List>
        </Box>
      </Container>
    </Element>
  );
};

export default About;
