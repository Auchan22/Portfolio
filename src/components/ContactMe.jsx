import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import { Element } from 'react-scroll';

function ContactMe() {
  return (
    <Element name='ContactMe'>
      <Container minWidth={{ base: '80vw', md: '60vw' }} mt={6}>
        <Box
          alignItems='center'
          display='flex'
          flexDirection='column'
          gap='15px'
        >
          <Heading
            as='h1'
            color={useColorModeValue('#000000', '#ffffff')}
            size='2xl'
            textAlign='center'
          >
            Contactame
          </Heading>
          <Text fontSize='18px' maxWidth='400px' textAlign='center'>
            ¿Querés conocerme más a fondo o querés trabajar conmigo? O si
            simplemente queres hablar, hacelo con gusto, no muerdo!
          </Text>
          <Button
            _hover={{
              outline: `3px solid ${useColorModeValue('#000000', '#ffffff')}`,
              outlineOffset: '3px',
              transition: 'all 250ms ease',
            }}
            aria-label='Enviarme un Correo'
            borderRadius='20px'
            fontSize='24px'
            padding='25px'
          >
            <Link isExternal href='mailto:agustinsurila@gmail.com'>
              !Escribime!
            </Link>
          </Button>
        </Box>
      </Container>
    </Element>
  );
}

export default ContactMe;
