import {Box, Flex, Heading, useColorModeValue, Container, Stack, IconButton, useDisclosure, MenuButton, Menu, MenuList, MenuItem, MenuDivider, Link, useMediaQuery, Image, useColorMode} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../../public/Logo.svg'
import ThemeToggle from './theme-toggle'
import { motion } from 'framer-motion'

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
            as={motion.a}
            href={url}
            initial={{
                borderBottom: 'none'
            }}
            whileHover={{ 
                borderBottomWidth: '3px',
                borderBottomColor: useColorModeValue('#00377e','#b9d6f2'),
                borderBottomStyle: 'solid'
            }}
            transition={'ease-in'}
            paddingX='15px'
            
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
            p={2}
            maxW='container.md'
            wrap='wrap'
            align='center'
            justify='space-between'
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
                <LinkModified url='#' name="Sobre Mi"/>
                <LinkModified url='#' name="Sobre Mi"/>
                <LinkModified url='#' name="Sobre Mi"/>

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