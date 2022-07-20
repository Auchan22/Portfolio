import {
  Stack,
  Icon,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';

import { LINKS } from '../json/icons';

const LinksList = () => {
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');

  return (
    <Stack
      bottom='0%'
      className={isLargerThan620 ? 'figureti' : null}
      direction={{ base: 'row', md: 'column' }}
      gap={{ base: '10px', md: 0 }}
      margin={{ base: '0px auto' }}
      padding='10px'
      position={{ base: 'relative', md: 'fixed' }}
      zIndex='1'
    >
      {LINKS.map((el, index) => (
        <a key={index} href={el.link} rel='noreferrer' target='_blank'>
          <Icon
            _hover={{
              color: el.color,
              transition: 'all 250ms ease',
              cursor: 'pointer',
            }}
            as={el.icon}
            color={useColorModeValue('#000000', '#edf6f9')}
            fontSize={{ base: '35px', md: '25px' }}
            margin='10px auto'
          />
        </a>
      ))}
    </Stack>
  );
};

export default LinksList;
