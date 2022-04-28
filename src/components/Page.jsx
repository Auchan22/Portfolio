import { Container, Box, Heading, Image, useColorModeValue, Text } from '@chakra-ui/react'
import React from 'react'

const Page = () => {
  return (
    <Container minWidth={{base: 'auto', md: '60vw'}}>

        <Box display={{md: 'flex'}}>


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
            <Box flexGrow={1}>
                <Text textAlign={'center'} fontSize={20}>Desarrollador Fullstack MERN, enfocado al Frontend Development</Text>
            </Box>
        </Box>

    </Container>
  )
}

export default Page