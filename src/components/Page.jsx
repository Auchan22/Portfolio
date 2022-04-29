import { Container, Box, Heading, Image, useColorModeValue, Text, chakra, Flex } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const ChakraText = chakra(motion.p ,{
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
} )

const NAME = 'Agus Surila';

const variants = {
    visible: {
        y:0,
        scaleY:1
    },
    hover: {
        y: [-1, -1.8, -2, -1.8, -1, 0],
        scaleY: [1, 1.4, 2, 1.4, 1, 1],
    }
}

const Page = () => {
  return (
    <Container minWidth={{base: 'auto', md: '60vw'}}>

        <Box display={{md: 'flex'}}>


            <Box flexShrink={0} my={{base: 4, md:0}} ml={{md:6}} align='center'>
                <Image
                    borderColor={useColorModeValue('Purple.900', 'whiteAlpha.800')}
                    borderWidth={2}
                    borderStyle='solid'
                    maxWidth='150px'
                    maxHeight='150px'
                    display='inline-block'
                    borderRadius='full'
                    alt='Imagen de perfil'
                    src='https://via.placeholder.com/150x150'
                />
            </Box>
            <Box flexGrow={1}>
                <Box textAlign={'center'} fontSize='6xl' >
                    Hola, soy
                    <ChakraText
                    bgGradient="linear(to-r, #FF6363, #006E7F)"
                    bgClip='text'
                    fontWeight='extrabold'

                    >
                        {NAME.split('').map((letter, id) => (
                            <motion.span
                            variants={variants}
                            initial='visible'
                            whileHover='hover' 
                            key={id}>
                                {letter}
                            </motion.span>
                        ))
                        }
                    </ChakraText>
                </Box>
            </Box>
        </Box>

    </Container>
  )
}

export default Page