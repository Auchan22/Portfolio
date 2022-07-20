import {
  Box,
  Heading,
  Icon,
  Img,
  Link,
  List,
  ListItem,
  position,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import styles from './styles/styles.module.scss';

const EffectImage = ({ src }) => {
  return (
    <Img
      alt='Imagén del proyecto'
      borderRadius='md'
      className={{ base: null, md: styles.effectImg }}
      display={{ base: 'none', md: 'block' }}
      flex={1}
      maxHeight='400px'
      maxWidth='400px'
      position={{ base: 'absolute', md: 'relative' }}
      src={src}
      zIndex={{ base: '-1', md: '0' }}
    />
  );
};

const Links = ({ l }) => {
  return (
    <Stack direction='row' ml='15px' mt='15px' spacing='24px'>
      {/* {console.log(l)} */}
      {l[0] === '' ? null : (
        <Link isExternal href={l[0]}>
          <Icon
            _hover={{
              transform: 'scale(1.5, 1.5)',
              transition: 'all 250ms ease-in-out',
            }}
            as={FiGithub}
            color={{
              base: '#FFFFFF',
              md: useColorModeValue('#000000', '#FFFFFF'),
            }}
            fontSize='30px'
          />
        </Link>
      )}

      {l[1] === '' ? null : (
        <Link isExternal href={l[1]}>
          <Icon
            _hover={{
              transform: 'scale(1.5, 1.5)',
              transition: 'all 250ms ease-in-out',
            }}
            as={FiExternalLink}
            color={{
              base: '#FFFFFF',
              md: useColorModeValue('#000000', '#FFFFFF'),
            }}
            fontSize='30px'
          />
        </Link>
      )}
    </Stack>
  );
};

const ProjectCard = ({ data, position }) => {
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');

  return (
    <Box
      key={data.id}
      alignItems='center'
      backgroundImage={{ base: data.img, md: 'none' }}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      borderRadius='10px'
      display='flex'
      justifyContent={{ base: 'center', md: 'space-between' }}
      margin='35px 0'
      maxWidth='100%'
      minHeight={{ base: '400px', md: '400px' }}
    >
      {position === 'left' ? (
        <>
          <EffectImage src={data.img} />
          <Box
            backdropBlur='5px'
            backdropBrightness='30%'
            backdropFilter={{ base: 'auto', md: 'none' }}
            borderRadius='md'
            flex={1}
            maxWidth='400px'
            minH={{ base: '400px', md: '400px' }}
            ml={{ base: 0, md: 2 }}
            padding={{ base: '10px', md: 0 }}
          >
            <Text
              as='h5'
              className={styles.encabezadoProyectos}
              color={{
                base: '#aafac8',
                md: useColorModeValue('#081c15', '#aafac8'),
              }}
              mb='20px'
            >
              Proyecto Seleccionado
            </Text>
            <Heading
              as='h3'
              color={{
                base: '#f1faee',
                md: useColorModeValue('#000000', '#f1faee'),
              }}
              size='2xl'
            >
              {data.title}
            </Heading>
            <Text
              color={{
                base: '#b7b7a4',
                md: useColorModeValue('#081c15', '#b7b7a4'),
              }}
              maxHeight='200px'
              mb='50px'
              mt='10px'
              width={{ base: '80vw', md: '20vw' }}
            >
              {data.desc}
            </Text>
            <List
              alignItems='center'
              display='flex'
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
              mt={5}
              textAlign='center'
            >
              {data.Tec.slice(0, isLargerThan620 ? 5 : 4).map((el, index) => (
                <ListItem
                  key={index}
                  className={styles.encabezadoProyectos}
                  color={{
                    base: '#f1faee',
                    md: useColorModeValue('#081c15', '#aafac8'),
                  }}
                  mx={4}
                >
                  {el}
                </ListItem>
              ))}
            </List>
            <Links l={data.links} />
          </Box>
        </>
      ) : (
        <>
          <Box
            backdropBlur='5px'
            backdropBrightness='30%'
            backdropFilter={{ base: 'auto', md: 'none' }}
            borderRadius='md'
            flex={1}
            maxWidth='400px'
            minH='400px'
            mr={{ base: 0, md: 2 }}
            padding={{ base: '10px', md: 0 }}
          >
            <Text
              as='h5'
              className={styles.encabezadoProyectos}
              color={{
                base: '#aafac8',
                md: useColorModeValue('#081c15', '#aafac8'),
              }}
              mb='20px'
            >
              Proyecto Seleccionado
            </Text>
            <Heading
              as='h3'
              color={{
                base: '#f1faee',
                md: useColorModeValue('#000000', '#f1faee'),
              }}
              size='2xl'
            >
              {data.title}
            </Heading>
            <Text
              color={{
                base: '#b7b7a4',
                md: useColorModeValue('#081c15', '#b7b7a4'),
              }}
              maxHeight='200px'
              mb='50px'
              mt='10px'
              width={{ base: '80vw', md: '20vw' }}
            >
              {data.desc}
            </Text>
            <List
              alignItems='center'
              display='flex'
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
              mt={5}
              textAlign='center'
            >
              {data.Tec.slice(0, isLargerThan620 ? 5 : 4).map((el, index) => (
                <ListItem
                  key={index}
                  className={styles.encabezadoProyectos}
                  color={{
                    base: '#f1faee',
                    md: useColorModeValue('#081c15', '#aafac8'),
                  }}
                  fontWeight='100'
                  mx={4}
                >
                  {el}
                </ListItem>
              ))}
            </List>
            <Links l={data.links} />
          </Box>
          <EffectImage src={data.img} />
        </>
      )}
    </Box>
  );
};

export default ProjectCard;
