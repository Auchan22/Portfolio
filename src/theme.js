import { extendTheme, textDecoration } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => {
    {
      mode('#f8f9fa', '#282a36')(props);
    }
  },
};

const components = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
      color: '#7c858d',
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
