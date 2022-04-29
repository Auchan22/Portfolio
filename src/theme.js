import { extendTheme, textDecoration } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => {
    body: {
      bg: mode('#EEEEEE', '#191919')(props);
    }
  },
};

const components = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'M PLUS Rounded 1c'",
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  fonts,
  components,
});

export default theme;
