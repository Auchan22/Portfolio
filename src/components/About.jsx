import { Box, Container, Text, Heading, Button, Flex } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'

const About = () => {
  return (
    <Container mt={6} minWidth={{base: '80vw', md: '60vw'}} >
        <Box>
            <Heading as='h1' size='2xl' color='#826F66'>
                Sobre Mí
            </Heading>
            <hr/>
        </Box>
        <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='25px'>
            <Text fontSize={20} letterSpacing={1}>
                Hola, soy Agustín Surila, un joven estudiante de la carrera de Licenciatura en Sistemas de la UNLP, pero tambien, <b>Frontend Developer</b>.<br/>
                Empecé con el desarrollo web de forma autodidacta, y a día de hoy, sigo adquieriendo contenidos de la misma forma. Mi proxima meta es convertirme en MERN Stack Fullstack<br/>
                Me considero un chico competitivo, con muchas ganas de progresar.
            </Text>
            <Button as="a" colorScheme='blue' fontSize='20px' rightIcon={<DownloadIcon />}>
                Descargar CV
            </Button>
        </Flex>
        
    </Container>
  )
}

export default About