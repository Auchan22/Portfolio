import React from 'react'
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react"
import styles from "./styles/styles.module.scss"

const Footer = () => {
  return (
    <Container my={6} position="relative" bottom="0"  minWidth={{base: '80vw', md: '60vw'}}>
        <Box textAlign="center">
            <Text className={styles.encabezadoProyectos} _hover={{color: useColorModeValue("#081c15", "#aafac8"), fontWeight: "800"}} >
                Diseño y Desarrollo por Agustín Surila
            </Text>
        </Box>
    </Container>
  )
}

export default Footer