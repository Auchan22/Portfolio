import { Button, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'


const ThemeToggle = () => {
    const {colorMode, toggleColorMode } = useColorMode()
  return (
      <Button
        as={IconButton}
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon h={4} w={4}/> : <SunIcon h={4} w={4}/>}
        mr={2}
        bgColor={useColorModeValue('#ECDBBA','#064663')}
      />
  )
}

export default ThemeToggle