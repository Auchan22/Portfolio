import React, { useEffect, useRef } from 'react'

import About from "./components/About"
import Navbar from "./components/Navbar"
import Page from "./components/Page"
import Hero from './components/Hero'
import { motion, isValidMotionProp, useAnimation, useViewportScroll } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { LINKS } from './assets/icons'
import { Icon, ListIcon, useColorModeValue, List, Link } from '@chakra-ui/react'

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
    <List padding="10px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="fixed" zIndex={100} bottom="0%" className='figureti'>
      {
        LINKS.map(el => (
          <a href="#">
            <ListIcon fontSize="25px" margin="10px auto" as={el.icon} color={useColorModeValue("#000000", "#edf6f9")} _hover={{color: el.color, transition: "all 250ms ease", cursor: "pointer"}}/>
          </a>
            
        ))
      }
    </List>
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

  return (
    <>
      <Navbar/>
      <LinksLeft/>
      <Hero  />
      
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
      <EmailRight/>
    </>
  )
}

export default App
