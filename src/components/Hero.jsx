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
        <Box aria-label='Boton scrolleable' position="relative" margin={{base: "25% auto", md: "0px auto"}} bottom="15%" display="flex" alignItems="center" justifyContent="center" flexDir="column" minWidth="200px">
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
        width="100vw"
        height={{base: "80vh", md: "100vh"}}
        mb={{base: "70px", md: 0}}
    >
        <Box
            width={{base: "70%", md: "90%"}}
            // bgColor='red'
            minHeight={{base: "70%", md: "80%"}}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            margin="0px 10px"
        >
            <Box textAlign="left" marginLeft={{base: 0, md: "15%"}}>
                <Text fontSize="25px" className={styles.encabezadoProyectos}  mb="20px">Hola, yo soy</Text>
                <Heading as="h1" fontSize={{base: "44px", md: "100px"}} mb="20px">Agustin Surila</Heading>
                <Heading as="h3" size='2xl' color={useColorModeValue('#2a9d8f', '#005f73')}>Front-end Developer</Heading>
                <Text fontWeight="500" mt="20px" maxHeight={{base: "200px" }} width={{base: "300px", md: "600px"}}>Soy un joven autodidacta, en busca de aprender cada día cosas nuevas y mejorarme con el paso del tiempo. Actualmente, me encuentro buscando mi primer empleo, con muchas ansías de trabajar en equipo.</Text>

            </Box>
        </Box>
        
        <DownArrow />
    </Box>
  )
}

export default Hero