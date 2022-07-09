import { Container, Box, Heading, Image, useColorModeValue, Text, Icon, position } from '@chakra-ui/react'
import styles from "./styles/styles.module.scss"
import { BsArrowDown } from "react-icons/bs"
import { motion } from 'framer-motion'
import { animateScroll } from 'react-scroll'

const variants = {
    initial: {
        scale: 1,
    },
    hover:{
        scale: 1.5,
        boxShadow: "10px 10px 39px -7px rgba(0,0,0,0.26)",
        cursor: "pointer",
        transition: {
            duration: 0.5
        }
    },
}

const stylesArrow = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backdropFilter: 'blur(10px)',
    backgroundColor: "#118ab2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const DownArrow = () =>{
    let scroll = animateScroll;
    const handleScroll = () =>{
        scroll.scrollTo(800, {
            duration: 500,
            delay: 100,
            smooth: true,
        })
    }
    return (
        <Box position="relative" margin="0px auto" bottom="15%" display="flex" alignItems="center" justifyContent="center" flexDir="column" minWidth="200px">
            <Text as="h5" mb="15px">Conoceme un poco más</Text>
            <motion.div variants={variants} style={stylesArrow} whileHover="hover" onClick={handleScroll}>
                <Icon as={BsArrowDown} fontSize="35px" />
            </motion.div>
        </Box>
        
    )
}

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
                <Text as="h5" size='sm' className={styles.encabezadoProyectos} mb="20px">Hola, yo soy</Text>
                <Heading as="h1" fontSize='100px'>Agustin Surila</Heading>
                <Heading as="h3" size='2xl' color={useColorModeValue('#2a9d8f', '#005f73')}>Front-end Developer</Heading>
                <Text fontWeight="500" mt="20px" width="600px">Soy un joven autodidacta, en busca de aprender cada día cosas nuevas y mejorarme con el paso del tiempo. Actualmente, me encuentro buscando mi primer empleo, con muchas ansías de trabajar en equipo.</Text>

            </Box>
        </Container>
        
        <DownArrow />
    </Box>
  )
}

export default Hero