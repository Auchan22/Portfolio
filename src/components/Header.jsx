import { Box, color, Link, Text, useColorModeValue, chakra } from '@chakra-ui/react'
import {motion} from 'framer-motion'


const Header = () => {
  return (
    <Box>
      <Link textDecoration='none'>
          <Text
              // color={useColorModeValue('#1A132F', '#F7E2E2')}
              fontFamily='M PLUS Rounded 1c'
              ml={3}
              fontWeight='extrabold'
              fontSize='6xl'
              bgGradient='linear(to-r, green.200, pink.500)'
              bgClip='text'
              whileHover={{
                rotate: [0, 0, 360, 360, 0],
                transition: { duration: 1.5, type: 'spring' },
                
              }}
              as={motion.p}
          >
              AS
          </Text>
        </Link>
    </Box>
  )
}

export default Header