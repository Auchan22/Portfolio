import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box>
        <Text
            // color={useColorModeValue('#1A132F', '#F7E2E2')}
            fontFamily='M PLUS Rounded 1c'
            ml={3}
            fontWeight='bold'
        >
            Agustin Surila
        </Text>
    </Box>
  )
}

export default Header