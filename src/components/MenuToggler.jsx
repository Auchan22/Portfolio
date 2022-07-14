import { Icon } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const MenuToggler = ({toggle, open}) => {

  return (
        <Icon aria-label='Boton para abrir menú' fontSize="25px" width="50px" onClick={toggle} as={open ? AiOutlineClose : AiOutlineMenu}/>
  )
}

export default MenuToggler