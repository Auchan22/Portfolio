import {Box, Flex, Heading, useColorModeValue, Container, Stack, IconButton, useDisclosure, MenuButton, Menu, MenuList, MenuItem, MenuDivider, Link, useMediaQuery, Image, useColorMode} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../../public/Logo.svg'
import ThemeToggler from './ThemeToggler'
import styles from "./styles/styles.module.scss"
import { Link as LinkR } from 'react-scroll'

const Logo = () =>{
    return (
        <Image
                borderRadius='full'
                boxSize='50px'
                src={logo}
                alt='Logo'
        />
    )
}

const styleLink = {

}

const LinkModified = ({target, name}) =>{
    
    return (
        <LinkR
            className={styles.navbarLink}
            to={target}
            duration={500}
            delay={100}
            isDynamic={true}
            offset={-100}
            smooth={true}
            // _hover={{
            //     color: useColorModeValue('#282a36','#f8f9fa'),
            // }}
            style={{padding: "0px 25px"}}
        >{name}</LinkR>
    )
}

const DesktopNavbar = () =>{
    return (
        <Box 
        position={'fixed'}
        as='nav'
        w='100%'
        // bg={useColorModeValue('#F7E2E2', '#1A132F')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        top={0}
        minHeight={'80px'}
    >
        <Container 
            display='flex'
            maxW='100%'
            wrap='wrap'
            align='center'
            paddingX="100px"
            paddingY="10px"
        >

            <Stack
                direction='row'
                display='flex'
                width='auto'
                alignItems='center'
                justifyContent='center'
                flexGrow={1}
                px={4}
                mt='0'
            >
                <LinkModified target="AboutMe" name="Sobre mi"/>
                <LinkModified target="Projects" name="Proyectos"/>
                <LinkModified target="ContactMe" name="Contacto"/>

                <ThemeToggler />
            </Stack>

            
        </Container>
    </Box>
    )
}

function Navbar(){
    const [isDesktop] = useMediaQuery('(min-width:760px)');

    return (
        <>
            {isDesktop ? <DesktopNavbar/> : 'Hola mundp'}
        </>
    )
}

export default Navbar