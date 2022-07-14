import { Box, Heading, Img, Icon, List, Link, ListItem, Stack, Text, useColorModeValue, useMediaQuery, position } from "@chakra-ui/react"
import styles from "./styles/styles.module.scss"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const URL_IMG = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"

const EffectImage = () =>{
    return (
        <Img alt="Imagén del proyecto" borderRadius='md' flex={1} src={URL_IMG} position={{base: "absolute", md: "relative"}} zIndex={{base: "-1", md: "0"}}  className={{base: null, md: styles.effectImg}} filter={{base: "auto", md: "auto"}} brightness={{base: "30%"}}  maxWidth="90vw" minHeight="400px" />
    )
}

const Links = ({l}) =>{
    return (
        <Stack direction="row" spacing="24px" mt="15px" ml="15px">
            {/* {console.log(l)} */}
            {l[0] === "" ? null : 
                <Link href={l[0]} isExternal>
                    <Icon as={FiGithub} fontSize="24px" _hover={{transform: "scale(1.5, 1.5)", transition: "all 250ms ease-in-out"}}/>
                </Link>
            }
            
            {l[1] === "" ? null : 
                <Link href={l[1]} isExternal>
                    <Icon as={FiExternalLink} fontSize="24px" _hover={{transform: "scale(1.5, 1.5)", transition: "all 250ms ease-in-out"}}/>
                </Link>
            }
            
        </Stack>
    )
}

const ProjectCard = ({data, position}) => {
    const [isLargerThan620] = useMediaQuery('(min-width: 620px)')

    return (
        <Box maxWidth="50vw" minHeight="200px" margin={{base: "65px auto", md: "35px auto"}} display="flex" alignItems="center" justifyContent={{base: "center", md: "space-between"}}  key={data.id}>
            {position === "left" ? 
            <>
                <EffectImage query={isLargerThan620} />
                <Box maxWidth="90vw" maxH="400px" ml={{base: 0, md: 5}} pl="2px" flex={1}>
                    <Text as="h5" color={{base: "#aafac8", md: useColorModeValue("#081c15", "#aafac8")}} className={styles.encabezadoProyectos}>Proyecto Seleccionado</Text>
                    <Heading as="h3" size="2xl" color={{base:"#f1faee" , md: useColorModeValue("#000000", "#f1faee")}}>{data.title}</Heading>
                    <Text mt="10px" color={{base: "#b7b7a4", md: useColorModeValue("#081c15", "#b7b7a4")}} noOfLines={6} width={{base:"80vw", md: "20vw"}} maxHeight="200px">
                        {data.desc}
                    </Text>
                    <List mt={5} flexWrap={{base: "wrap", md: "nowrap"}} display="flex" alignItems="center" textAlign="center">
                        {data.Tec.slice(0,isLargerThan620 ? 5 : 4).map((el) => (
                            <ListItem color={{base: "#f1faee", md: useColorModeValue("#081c15", "#aafac8")}} className={styles.encabezadoProyectos} mx={4}>{el}</ListItem>
                        ))}
                    </List>
                    <Links l={data.links}/>
                </Box>
            </>
             : 
             <>
                <Box maxWidth="90vw" maxH="300px" flex={1} mr={{base: 0, md: 5}}>
                    <Text as="h5" color={{base: "#aafac8", md: useColorModeValue("#081c15", "#aafac8")}} className={styles.encabezadoProyectos}>Proyecto Seleccionado</Text>
                    <Heading as="h3" size="2xl" color={{base:"#f1faee" , md: useColorModeValue("#000000", "#f1faee")}}>{data.title}</Heading>
                    <Text mt="10px" color={{base: "#b7b7a4", md: useColorModeValue("#081c15", "#b7b7a4")}} noOfLines={6} width={{base:"80vw", md: "20vw"}} maxHeight="200px">
                        {data.desc}
                    </Text>
                    <List mt={5} display="flex" flexWrap={{base: "wrap", md: "nowrap"}} alignItems="center" textAlign="center">
                        {data.Tec.slice(0,isLargerThan620 ? 5 : 4).map((el) => (
                            <ListItem color={{base: "#f1faee", md: useColorModeValue("#081c15", "#aafac8")}} className={styles.encabezadoProyectos} fontWeight="100" mx={4}>{el}</ListItem>
                        ))}
                    </List>
                    <Links l={data.links}/>
                </Box>
                <EffectImage />
            </>
             }
            
       </Box>
    ) 
        
}

export default ProjectCard