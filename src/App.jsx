import React, { useEffect } from 'react'

import About from "./components/About"
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import { motion, isValidMotionProp, useAnimation, useViewportScroll } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { LINKS } from './assets/icons'
import { Icon, Stack, useColorModeValue, Link, useMediaQuery} from '@chakra-ui/react'
import ProjectCard from './components/ProjectCard'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const variants = {
  visible: {
    opacity: 1, scale:1, transition:{duration: 1, delay: 0.5}, y: '-25px'
  },
  hidden: {
    opacity: 0, scale: 1, backgroundColor: 'transparent'
  }
}

const LinksLeft = () =>{
  return (
    <Stack direction='column' padding="10px"  position="fixed" zIndex={100} bottom="0%" className='figureti'>
      {
        LINKS.map((el, index) => (
          <a href="#" key={index}>
            <Icon fontSize="25px" margin="10px auto" as={el.icon} color={useColorModeValue("#000000", "#edf6f9")} _hover={{color: el.color, transition: "all 250ms ease", cursor: "pointer"}}/>
          </a>
            
        ))
      }
    </Stack>
  )
}

const EmailRight = () => {
  return (
    <Link href="mailto:agustinsurila@gmail.com" position="fixed" zIndex={100} bottom="0%" right="2%" fontWeight="extrabold" color={useColorModeValue("#000000", "#edf6f9")} _hover={{color: "#006d77", transition: "all 250ms ease"}} className='figureti link' display="flex" >agustinsurila@gmail.com</Link>
  )
}

function AnimatedSection({children}){
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(()=>{
    if(inView){
      controls.start('visible')
    }
  },[controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={controls} 
    >
      {children}
    </motion.div>
  )
}

function App() {

  const [isLargerThan620] = useMediaQuery('(min-width: 620px)')

  return (
    <>
      {
        isLargerThan620 ? <><LinksLeft/><EmailRight/></> : null
      }

      <Navbar/>
      <Hero  />
      
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<Projects />}/>
      <AnimatedSection children={<ContactMe />}/>

      <Footer />
    </>
  )
}

export default App
