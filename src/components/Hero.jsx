import { Container, Box, Heading, Image, useColorModeValue, Text, chakra, Flex, UnorderedList, ListItem, CircularProgress } from '@chakra-ui/react'
import { motion, isValidMotionProp, useViewportScroll } from 'framer-motion'
import styles from "./styles/styles.module.scss"

const Hero = () => {

  return (
    <Box
        width={'100%'}
        height={'100vh'}
        position='relative'
    >
        <Container
            maxWidth={'90%'}
            // bgColor='red'
            minHeight={'80%'}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
        >
            <Box textAlign="left" marginLeft="15%">
                <Heading as="h5" size='sm' mb="20px">Hola, mi nombre es</Heading>
                <Heading as="h1" fontSize='100px'>Agustin Surila</Heading>
                <Heading as="h3" size='2xl' color={useColorModeValue('#2a9d8f', '#005f73')}>Front-end Developer</Heading>
                <Text fontWeight="500" mt="20px" width="600px">Soy un joven autodidacta, en busca de aprender cada día cosas nuevas y mejorarme con el paso del tiempo. Actualmente, me encuentro buscando mi primer empleo, con muchas ansías de trabajar en equipo.</Text>

            </Box>
        </Container>
        
    </Box>
  )
}

export default Hero