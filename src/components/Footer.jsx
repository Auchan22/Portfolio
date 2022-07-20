import {
  Box,
  Container,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';

import styles from './styles/styles.module.scss';
import LinksList from './LinksList';

const Footer = () => {
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');

  return (
    <Container
      bottom='0'
      display='flex'
      flexDir='column'
      minHeight='50px'
      minWidth={{ base: '80vw', md: '60vw' }}
      my={6}
      position='relative'
    >
      {!isLargerThan620 && <LinksList />}
      <Box textAlign='center'>
        <Text
          _hover={{
            color: useColorModeValue('#081c15', '#aafac8'),
            fontWeight: '800',
          }}
          className={styles.encabezadoProyectos}
        >
          Diseñado y Desarrollado por Agustín Surila
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
