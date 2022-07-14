import React from 'react'
import { Box, Container, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react"
import styles from "./styles/styles.module.scss"
import LinksList from './LinksList'

const Footer = () => {

  const [isLargerThan620] = useMediaQuery('(min-width: 620px)')
  return (
    <Container my={6} position="relative" bottom="0" display="flex" flexDir="column" minWidth={{base: '80vw', md: '60vw'}} minHeight="50px">
      {!isLargerThan620 && <LinksList />}
        <Box textAlign="center">
            <Text className={styles.encabezadoProyectos} _hover={{color: useColorModeValue("#081c15", "#aafac8"), fontWeight: "800"}} >
                Diseñado y Desarrollado por Agustín Surila
            </Text>
        </Box>
    </Container>
  )
}

export default Footer