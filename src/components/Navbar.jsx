import {Box, Flex, Heading, useColorModeValue, Container, Stack, IconButton, useDisclosure, MenuButton, Menu, MenuList, MenuItem, MenuDivider, Link} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Header from './Header'
import ThemeToggle from './theme-toggle'

const Navbar = () => {
    const {isOpen, onToggle} = useDisclosure()
  return (
    <Box 
        position={'fixed'}
        as='nav'
        w='100%'
        // bg={useColorModeValue('#F7E2E2', '#1A132F')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        top={0}
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
                <Heading as={'h1'} size='lg' letterSpacing={'tight'}>
                    <Header/>
                </Heading>
            </Flex>

            <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md:'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems='center'
                flexGrow={1}
                px={4}
                mt={{base: 4, md: 0}}
            >
                <Link href='/'>Sobre Mí</Link>
                <Link href='/'>Proyectos</Link>
                <Link href='/'>Contacot</Link>
            </Stack>

            <Box flex={1} align='right'>
            <ThemeToggle />
                <Box
                    display={{base: 'inline-block', md: 'none'}}
                    ml={2}
                >

                    
                    <Menu>
                        <MenuButton 
                        as={IconButton }
                        icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>} variant='outline' 
                        // bgColor={useColorModeValue('#F7E2E2', '#1A132F')} 
                        aria-label='Options'
                        onClick={onToggle}
                        />
                        <MenuList>
                            <MenuItem as={Link} href='/'>Sobre mí</MenuItem>
                            <MenuDivider />
                            <MenuItem as={Link} href='/'>Proyectos</MenuItem>
                            <MenuDivider />
                            <MenuItem as={Link} href='/'>Contacto</MenuItem>
                        </MenuList>
                    </Menu>
                    
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Navbar