import {
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      as={motion.button}
      onClick={toggleColorMode}
      icon={
        colorMode === 'light' ? (
          <MoonIcon h={4} w={4} />
        ) : (
          <SunIcon h={4} w={4} />
        )
      }
      mr={2}
      isRound
      margin='10px'
      bgColor={useColorModeValue('#ECDBBA', '#064663')}
      whileHover={{
        outline: `2px solid ${useColorModeValue('#064663', '#ECDBBA')}`,
        transition: { duration: 0.5 },
      }}
      _focus={{
        boxShadow: 'none',
      }}
      aria-label='Cambiar Tema'
    />
  );
};

export default ThemeToggler;
