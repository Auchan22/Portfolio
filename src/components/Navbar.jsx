import {
  Box,
  Container,
  Image,
  Stack,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion, useCycle } from 'framer-motion';
import { Link as LinkR } from 'react-scroll';

import logo from '../../public/Logo_Agus.svg';
import MenuToggler from './MenuToggler';
import styles from './styles/styles.module.scss';
import ThemeToggler from './ThemeToggler';

const Logo = () => {
  return <Image alt='Logo' borderRadius='full' boxSize='50px' src={logo} />;
};

const sidebar = {
  open: {
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 4,
    },
  },
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const LinkModified = ({ target, name, toggle }) => {
  return (
    <LinkR
      className={styles.navbarLink}
      delay={100}
      duration={500}
      isDynamic={true}
      offset={-100}
      smooth={true}
      style={{ padding: '0px 25px' }}
      // _hover={{
      //     color: useColorModeValue('#282a36','#f8f9fa'),
      // }}
      to={target}
      onClick={toggle}
    >
      {name}
    </LinkR>
  );
};

const DesktopNavbar = () => {
  return (
    <Box
      as='nav'
      minHeight={'60px'}
      position={'fixed'}
      // bg={useColorModeValue('#F7E2E2', '#1A132F')}
      style={{ backdropFilter: 'blur(10px)' }}
      top={0}
      w='100%'
      zIndex={1}
    >
      <Container
        align='center'
        display='flex'
        maxW='100%'
        paddingX='100px'
        paddingY='10px'
        wrap='wrap'
      >
        <Stack
          alignItems='center'
          direction='row'
          display='flex'
          flexGrow={1}
          justifyContent='center'
          mt='0'
          px={4}
          width='auto'
        >
          <LinkModified name='Sobre mi' target='AboutMe' />
          <LinkModified name='Proyectos' target='Projects' />
          <LinkModified name='Contacto' target='ContactMe' />

          <ThemeToggler />
        </Stack>
      </Container>
    </Box>
  );
};

const variants = {
  open: {
    transition: { duration: 0.1, ease: 'easeIn' },
    display: 'block',
    x: '0%',
  },
  closed: {
    transition: { duration: 1, ease: 'easeOut' },
    display: 'none',
    x: '100%',
  },
};

const MobileNavbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Box maxWidth='100vw'>
      <Box
        alignItems='center'
        as={'nav'}
        display='flex'
        height='60px'
        justifyContent='space-between'
        position='fixed'
        style={{ backdropFilter: isOpen ? null : 'blur(10px)' }}
        top={0}
        width='100vw'
        zIndex='1000'
      >
        {/* <motion.div className={styles.menuMobile} variants={sidebar} /> */}

        <ThemeToggler />
        <MenuToggler open={isOpen} toggle={() => toggleOpen()} />
      </Box>

      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        initial='closed'
        style={{
          width: '75vw',
          minHeight: '100%',
          backgroundColor: useColorModeValue('#e2e8f0', '#2d3748'),
          backdropFilter: 'auto',
          backdropBlur: '10px',
          zIndex: '100',
          position: 'fixed',
          top: 0,
          right: 0,
          boxShadow: '-12px -1px 331px 51px rgba(0,90,189,1)',
        }}
        variants={variants}
      >
        {isOpen ? (
          <Stack
            alignItems='center'
            justifyContent='space-between'
            minHeight='40%'
            mt='80px'
            spacing={4}
          >
            <LinkModified
              name='Sobre mi'
              target='AboutMe'
              toggle={() => toggleOpen()}
            />
            <LinkModified
              name='Proyectos'
              target='Projects'
              toggle={() => toggleOpen()}
            />
            <LinkModified
              name='Contacto'
              target='ContactMe'
              toggle={() => toggleOpen()}
            />
          </Stack>
        ) : null}
      </motion.div>
    </Box>
  );
};

function Navbar() {
  const [isDesktop] = useMediaQuery('(min-width:760px)');

  return <>{isDesktop ? <DesktopNavbar /> : <MobileNavbar />}</>;
}

export default Navbar;
