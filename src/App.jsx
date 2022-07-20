import React, { useEffect, useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  motion,
  isValidMotionProp,
  useAnimation,
  useViewportScroll,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LINKS } from './json/icons';
import {
  Icon,
  Stack,
  useColorModeValue,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import ProjectCard from './components/ProjectCard';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Logros from './components/Logros';
import LinksList from './components/LinksList';
import LoadingPage from './components/LoadingPage';

const achivements = [
  {
    id: 1,
    datos: {
      title: 'Empeza a conocerme',
      description: 'Entraste a mi página por primera vez',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    },
    active: false,
  },
  {
    id: 2,
    datos: {
      title: 'Avanzaste',
      description: 'Entraste a mi página por primera vez',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    },
    active: false,
  },
  {
    id: 3,
    datos: {
      title: 'Empeza a conocerme',
      description: 'Entraste a mi página por primera vez',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    },
    active: false,
  },
];

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5 },
    y: '-25px',
  },
  hidden: {
    opacity: 0,
    scale: 1,
    backgroundColor: 'transparent',
  },
};

const EmailRight = () => {
  return (
    <Link
      href='mailto:agustinsurila@gmail.com'
      position='fixed'
      zIndex={100}
      bottom='0%'
      right='2%'
      fontWeight='extrabold'
      color={useColorModeValue('#000000', '#edf6f9')}
      _hover={{ color: '#006d77', transition: 'all 250ms ease' }}
      className='figureti link'
      display='flex'
    >
      agustinsurila@gmail.com
    </Link>
  );
};

function AnimatedSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // localStorage.setItem("achivements", JSON.stringify(achivements))
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      {isLargerThan620 ? (
        <>
          <LinksList />
          <EmailRight />
        </>
      ) : null}

      <Navbar />
      <Hero />

      <AnimatedSection children={<About />} />
      <AnimatedSection children={<Projects />} />
      <AnimatedSection children={<ContactMe />} />

      <Footer />
    </>
  );
}

export default App;
