import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { PROJECTS } from '../assets/projects'
import ProjectList from './ProjectList'
import styles from "./styles/styles.module.scss"
import { Element } from 'react-scroll'

const Projects = () => {
  return (
    <Element name="Projects">
      <Container mt={6} minWidth={{base: '80vw', md: '60vw'}}>
          <Box>
              <Heading as='h1' size='2xl' className={styles.sectionTitle} color={useColorModeValue("#000000", "#ffffff")}>
                  Proyectos
              </Heading>
              <ProjectList data={PROJECTS} />
          </Box>
      </Container>
    </Element>
  )
}

export default Projects