import { useEffect } from 'react'

import About from "./components/About"
import Navbar from "./components/Navbar"
import Page from "./components/Page"
import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const variants = {
  visible: {
    opacity: 1, scale:1, transition:{duration: 1, delay: 0.5}, y: '-25px'
  },
  hidden: {
    opacity: 0, scale: 1,
  }
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
      <Page/>
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
      <AnimatedSection children={<About />}/>
    </>
  )
}

export default App
