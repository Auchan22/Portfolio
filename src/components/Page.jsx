import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Page = () => {
  return (
    <Container minWidth={{base: 'auto', md: '60vw'}}>
        <Box borderRadius='lg' fontWeight={'bold'} bg={useColorModeValue('red.500', '#3F3351')} mb={6} p={3} align='center'>
            Bienvenido a mi Portfolio
        </Box>

        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <p>Desarrollador Fullstack MERN, enfocado al Frontend Development</p>
            </Box>

            <Box flexShrink={0} my={{base: 4, md:0}} ml={{md:6}} align='center'>
                <Image
                    borderColor={useColorModeValue('Purple.900', 'whiteAlpha.800')}
                    borderWidth={2}
                    borderStyle='solid'
                    maxWidth='150px'
                    maxHeight='150px'
                    display='inline-block'
                    borderRadius='full'
                    alt='Imagen de perfil'
                    src='https://via.placeholder.com/150x150'
                />
            </Box>
        </Box>
    </Container>
  )
}

export default Page