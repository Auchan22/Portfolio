import {Box, Flex, Heading, useColorModeValue, Container, Stack, IconButton, useDisclosure, MenuButton, Menu, MenuList, MenuItem, MenuDivider, Link, useMediaQuery, Image, useColorMode} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../../public/Logo.svg'
import ThemeToggle from './theme-toggle'
import styles from "./styles/styles.module.scss"

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

const LinkModified = ({url, name}) =>{
    
    return (
        <Link
            className={styles.navbarLink}
            href={url}
            paddingX='25px'
            _hover={{
                color: useColorModeValue('#282a36','#f8f9fa'),
            }}
        >{name}</Link>
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
            <Flex
                align={'center'}
                mr={5}    
            >
                <Logo/>
            </Flex>

            <Stack
                direction='row'
                display='flex'
                width='auto'
                alignItems='center'
                justifyContent='flex-end'
                flexGrow={1}
                px={4}
                mt='0'
            >
                <LinkModified url='#' name="Sobre mi"/>
                <LinkModified url='#' name="Proyectos"/>
                <LinkModified url='#' name="Contacto"/>

                <ThemeToggle />
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