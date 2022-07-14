import React from 'react'
import { Stack, Icon, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { LINKS } from '../json/icons'

const LinksList = () => {
    const [isLargerThan620] = useMediaQuery('(min-width: 620px)')
  return (
    <Stack direction={{base: "row", md: "column"}} gap={{base: "10px", md: 0}} padding="10px"  position={{base: "relative", md: "fixed"}} margin={{base: "0px auto"}} zIndex="1" bottom="0%" className={isLargerThan620 ? "figureti" : null}>
      {
        LINKS.map((el, index) => (
          <a href={el.link} key={index} target="_blank" >
            <Icon fontSize={{base: "35px", md: "25px"}} margin="10px auto" as={el.icon} color={useColorModeValue("#000000", "#edf6f9")} _hover={{color: el.color, transition: "all 250ms ease", cursor: "pointer"}}/>
          </a>
            
        ))
      }
    </Stack>
  )
}

export default LinksList