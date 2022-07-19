import React from 'react'
import {Container, Box, Heading, useColorModeValue, Text, Button, Link} from "@chakra-ui/react"
import { Element } from 'react-scroll'

const ContactMe = () => {
  return (
    <Element name="ContactMe">
        <Container mt={6}  minWidth={{base: '80vw', md: '60vw'}}>
            <Box display="flex" alignItems="center" flexDirection="column" gap="15px">
                <Heading as='h1' size='2xl' textAlign="center" color={useColorModeValue("#000000", "#ffffff")}>
                    Contactame
                </Heading>
                <Text fontSize="18px"  textAlign="center" maxWidth="400px">
                    ¿Querés conocerme más a fondo o querés trabajar conmigo? O si simplemente queres hablar, hacelo con gusto, no muerdo!
                </Text>
                <Button 
                    borderRadius="20px" 
                    fontSize="24px" 
                    padding="25px" 
                    _hover={
                        {outline: `3px solid ${useColorModeValue("#000000", "#ffffff")}`,
                        outlineOffset: "3px", 
                        transition: "all 250ms ease"}
                        }
                        aria-label='Enviarme un Correo'
                    >
                        <Link isExternal href='mailto:agustinsurila@gmail.com'>
                            !Escribime!
                        </Link>
                    </Button>
            </Box>
        </Container>
    </Element>
  )
}

export default ContactMe