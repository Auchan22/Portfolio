import { Box, Container, Text, Heading, Button, useColorModeValue, Img, chakra, List, ListIcon, UnorderedList, ListItem } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import CV from '../../public/CV-AgusSurila.pdf'
import { TEC } from "../assets/icons"
import styles from "./styles/styles.module.scss"
import { Element } from 'react-scroll'

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

const HighlightText = ({content}) =>{
    return (
        <chakra.span color='#2a9d8f' _hover={{filter: 'auto' ,brightness: '150%', fontWeight: 'bold', transition: 'all 250ms ease'}}>{content}</chakra.span>
    )
}


const About = () => {
  return (
    <Element name="AboutMe">
        <Container mt={6} minWidth={{base: '80vw', md: '60vw'}} >
            <Box>
                <Heading as='h1' size='2xl' className={styles.sectionTitle} color={useColorModeValue("#000000", "#ffffff")}>
                    Sobre Mí
                </Heading>
                {/* <motion.hr 
                    color={useColorModeValue('#251D3', '#125B50')}
                    variants={variants} 
                    initial='hidden' 
                    whileInView='show' 
                    viewport={{ once: true }} 
                    transition={{delay: 2}}
                /> */}
            </Box>
            <Box  display='flex' alignItems='center' justifyContent='center' flexDir='row' mt='20px'>
                <Box mr='20px'>
                    <Text fontSize={20} letterSpacing={1} mb='10px'>
                        Hola, mi nombre es <HighlightText content="Agustin"/>, y les vengo a presentar mi página web. Mi pasión por el desarrollo web surge durante el año 2020, durante la 1er etapa de aislamiento del Covid-19 en Argentina. Tuve mis inicios en PHP, por recomendación de mi padre (Analista en Sistemas), pero termine escogiendo el camino del desarrollo web.
                    </Text>
                    <Text fontSize={20} letterSpacing={1} mb='10px'>
                        Al dia de hoy, curso el 1er año de la carrera de <HighlightText content="Licenciatura en sistemas"/> en la Facultad de Informatica de la UNLP
                    </Text>
                    <Button as="a" href={CV} download='CV-AgusSurila' colorScheme='blue' fontSize='20px' rightIcon={<DownloadIcon />}>
                        Descargar CV
                    </Button>
                </Box>
                <Img src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' width='400px' height='400px' borderRadius='md'/>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' flexDir='column' mt='20px'>
                    <Text fontSize={20} letterSpacing={1} mb='10px'>
                        Mi proyecto es poder desarrollarme como un desarrollador <HighlightText content="Fullstack MERN"/>, por lo que dia a dia sigo aprendiendo nuevas tecnologías:
                    </Text>
                    <List spacing={3} padding="15px" bgColor={useColorModeValue("#edede9", "#4a4e69")} borderRadius="15px">
                        {TEC.map((el, index) => (
                            <ListIcon key={index} mx={2} fontSize="50px" as={el.icon} color={useColorModeValue("#4a4e69", "#cad2c5")} _hover={{color: el.color, transition: "all 250ms ease"}} />

                        ))}
                    </List>
            </Box>
            
        </Container>
    </Element>
  )
}

export default About