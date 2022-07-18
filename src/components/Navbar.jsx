import {Box, Flex, Heading, useColorModeValue, Container, Stack, IconButton, useDisclosure, MenuButton, Menu, MenuList, MenuItem, MenuDivider, Link, useMediaQuery, Image, useColorMode, useDimensions, position} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../../public/Logo_Agus.svg'
import ThemeToggler from './ThemeToggler'
import styles from "./styles/styles.module.scss"
import { Link as LinkR } from 'react-scroll'
import { motion, useCycle } from 'framer-motion'
import { useRef, useState } from 'react'
import MenuToggler from './MenuToggler'

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

const sidebar = {
    open: {
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 4
      }
    },
    closed: {
      clipPath: "circle(20px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const LinkModified = ({target, name, toggle}) =>{
    
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
            onClick={toggle}
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

const variants = {
    open:{
        transition: {duration: 0.1, ease: "easeIn"},
        display: "block",
        x: "0%", 
    },
    closed: {
        transition: {duration: 1,ease: "easeOut" },
        display: "none",
        x: "100%"
    }
}

const MobileNavbar = () =>{
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)
    const dimensions = useDimensions(containerRef)
    return(
        <Box maxWidth="100vw" >
            <Box
                as={"nav"}
                zIndex="1000"
                position="fixed"
                top={0}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                height="80px"
                width="100vw"
                style={{backdropFilter: isOpen ? null : "blur(10px)"}}
            >
                {/* <motion.div className={styles.menuMobile} variants={sidebar} /> */}
                
                <ThemeToggler />
                <MenuToggler toggle={() => toggleOpen()} open={isOpen}/>
            </Box>

            <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} style={{ width: "75vw", minHeight: "100%", backgroundColor: useColorModeValue("#e2e8f0", "#2d3748"), zIndex: "100",  position: "fixed", top: 0, right: 0, boxShadow: "-12px -1px 331px 51px rgba(0,90,189,1)"}}>
                    
                        {isOpen ? (
                                <Stack mt="80px" alignItems="center" justifyContent="space-between" minHeight="40%" spacing={4}>
                                    <LinkModified target="AboutMe" name="Sobre mi" toggle={()=>toggleOpen()}/>
                                    <LinkModified target="Projects" name="Proyectos" toggle={()=>toggleOpen()}/>
                                    <LinkModified target="ContactMe" name="Contacto" toggle={()=>toggleOpen()}/>
                                </Stack>
                        ) : null}
            </motion.div>
           
        </Box>
    )
}

function Navbar(){
    const [isDesktop] = useMediaQuery('(min-width:760px)');

    return (
        < >
            {isDesktop ? <DesktopNavbar/> : <MobileNavbar />}
        </ >
    )
}

export default Navbar