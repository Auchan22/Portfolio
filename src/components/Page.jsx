import {
  Box,
  chakra,
  Container,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraText = chakra(motion.p, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const NAME = 'Agus Surila';

const variants = {
  visible: {
    y: 0,
    scaleY: 1,
  },
  hover: {
    y: [-1, -1.8, -2, -1.8, -1, 0],
    scaleY: [1, 1.4, 2, 1.4, 1, 1],
  },
};

const Page = () => {
  return (
    <Container minWidth={{ base: 'auto', md: '60vw' }}>
      <Box display={{ md: 'flex' }}>
        <Box
          align='center'
          flexShrink={0}
          ml={{ md: 6 }}
          my={{ base: 4, md: 0 }}
        >
          <Image
            alt='Imagen de perfil'
            borderColor={useColorModeValue('Purple.900', 'whiteAlpha.800')}
            borderRadius='full'
            borderStyle='solid'
            borderWidth={2}
            display='inline-block'
            maxHeight='150px'
            maxWidth='150px'
            src='https://via.placeholder.com/150x150'
          />
        </Box>
        <Box flexGrow={1}>
          <Box fontSize='6xl' textAlign={'center'}>
            Hola, soy
            <ChakraText
              bgClip='text'
              bgGradient='linear(to-r, #FF6363, #006E7F)'
              fontWeight='extrabold'
            >
              {NAME.split('').map((letter, id) => (
                <motion.span
                  key={id}
                  initial='visible'
                  variants={variants}
                  whileHover='hover'
                >
                  {letter}
                </motion.span>
              ))}
            </ChakraText>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
