import { Icon } from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MenuToggler = ({ toggle, open }) => {
  return (
    <Icon
      aria-label='Boton para abrir menú'
      as={open ? AiOutlineClose : AiOutlineMenu}
      fontSize='25px'
      width='50px'
      onClick={toggle}
    />
  );
};

export default MenuToggler;
