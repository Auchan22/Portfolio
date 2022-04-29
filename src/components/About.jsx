import { Box, Container, Text, Heading, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import CV from '../../public/CV-AgusSurila.pdf'
import { motion } from 'framer-motion'

const variants = {
    hidden: {
        width: 0,
        borderTopWidth: '6px',
    },
    show:{
        width: ["0%", '100%'],
        borderTopWidth: '6px',
    }
}

const About = () => {
  return (
    <Container mt={6} minWidth={{base: '80vw', md: '60vw'}} >
        <Box>
            <Heading as='h1' size='2xl' color='#826F66'>
                Sobre Mí
            </Heading>
            <motion.hr 
                color={useColorModeValue('#251D3', '#125B50')}
                variants={variants} 
                initial='hidden' 
                whileInView='show' 
                viewport={{ once: true }} 
                transition={{delay: 2}}
            />
        </Box>
        <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='25px'>
            <Text fontSize={20} letterSpacing={1}>
                Soy un joven estudiante de la carrera de Licenciatura en Sistemas de la UNLP, pero tambien, <b>Frontend Developer</b>.<br/>
                Empecé con el desarrollo web de forma autodidacta, y a día de hoy, sigo adquieriendo contenidos de la misma forma. Mi proxima meta es convertirme en MERN Stack Fullstack<br/>
                Me considero un chico competitivo, con muchas ganas de progresar.
            </Text>
            <Button as="a" href={CV} download='CV-AgusSurila' colorScheme='blue' fontSize='20px' rightIcon={<DownloadIcon />}>
                Descargar CV
            </Button>
        </Flex>
        
    </Container>
  )
}

export default About