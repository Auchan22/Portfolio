import { Container, Box, Heading, Image, useColorModeValue, Text, chakra, Flex } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        pathSpacing: 2,
        opacity: 1,
        pathWidth: 10,
        transition: {
          pathLength: { delay, type: "spring", duration: '2', repeat: Infinity, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

const ChakraText = chakra(motion.p ,{
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
} )

const Hero = () => {

  return (
    <Box
        width={'100%'}
        height={'100vh'}
        position='relative'
    >
        <Container
            maxWidth={'90%'}
            // bgColor='red'
            minHeight={'80%'}
            display='flex'
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Box flexGrow={1}>
                <Box textAlign={'center'} fontSize='5xl' >
                    Hola, soy
                    <ChakraText
                    bgGradient="linear(to-r, #FF6363, #006E7F)"
                    bgClip='text'
                    fontWeight='extrabold'

                    >
                        Agustin Surila
                    </ChakraText>
                    
                </Box>
                <Text textAlign={'center'}>
                    ¿Queres conocerme? Entonces estas en la página ideal
                </Text>
            </Box>
            <Box flexGrow={1}>
                <lottie-player 
                    src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"  
                    background="transparent"  
                    speed="1"  
                    style={{width: '400px', height: '400px'}}
                    loop  
                    autoplay></lottie-player>
            </Box>
        </Container>
        <Box
            position='absolute'
            top='70%'
            right='5%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Text fontSize='12px' color='#005066'>
                Scroolléa para abajo
            </Text>
            <motion.svg
                width="150"
                height="150"
                initial="hidden"
                animate="visible"
            >
                <motion.line
                    x1="20"
                    y1="30"
                    x2="20"
                    y2="100"
                    stroke={useColorModeValue('#000000', '#fff')}
                    variants={draw}
                    custom={2}
                />
            </motion.svg>
        </Box>
        
    </Box>
  )
}

export default Hero