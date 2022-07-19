import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import {motion } from "framer-motion"

const bigTriangle = {
    hide: {
        opacity: 0,
        y: "1000%",
        transition: {duration: "3s", type: "spring"}
    },
    show:{
        opacity: 1,
        y: "104%",
        transition: {duration: 3, type: "spring"}
    }
}

const smallTriangle = {
     hide: {
        opacity: 0,
        y: "1000%",
        transition: {duration: "3s", type: "spring"}
    },
    show:{
        opacity: 1,
        y: "0%",
        transition: {duration: 3, type: "spring", delay: 1}
    }
}

const TriangleColor = ({props}) => (
    
<motion.svg
    width={94}
    height={81}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    variants={bigTriangle}
    initial="hide"
    animate="show"
    style={{ position: "absolute", top: `${props.top + 10}%`, zIndex: props.zIndex}}
>
    <path d="m47 0 46.765 81H.235L47 0Z" fill={`url(#${props.zIndex})`} />
    <defs>
        <linearGradient
            id={`${props.zIndex}`}
            x1={47}
            y1={0}
            x2={47}
            y2={108}
            gradientUnits="userSpaceOnUse"
        >
            <stop stopColor={props.stopC1} />
            <stop offset={0.839} stopColor={props.stopC2} />
        </linearGradient>
    </defs>
</motion.svg>
)

const TriangleWhite = () => (
    <motion.svg
      width={52}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hide"
      animate="show"
      variants={smallTriangle}
      style={{zIndex: 2, position: "absolute", bottom: "54%"}}
    >
      <path d="m26 0 25.98 45H.02L26 0Z" fill="#fff" />
    </motion.svg>
  )

const triangles = [
    {
        stopC1: "#00F0FF",
        stopC2: "#013550",
        zIndex: 1,
        top: 0
    },
    {
        stopC1: "#EF233C",
        stopC2: "#FB09B7",
        zIndex: 0,
        top: 3
    },
]

const LoadingPage = () => {
  return (
    <Container width="100vw" height="500px" position="relative" display="flex" alignItems="center" justifyContent="center">
            {triangles.map((el) => (<TriangleColor props={el} />))}
            <TriangleWhite />
    </Container>
  )
}

export default LoadingPage