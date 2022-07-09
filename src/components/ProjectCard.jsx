import { Box, Heading, Img, Icon, List, Link, ListItem, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import styles from "./styles/styles.module.scss"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const EffectImage = () =>{
    return (
        <Img borderRadius='md' flex={1} src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' className={styles.effectImg} />
    )
}

const Links = ({l}) =>{
    return (
        <Stack direction={["column", "row"]} spacing="24px" mt="15px" ml="15px">
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
    return (
        <Box maxWidth="100%" maxHeight="500px" margin="35px auto" display="flex" alignItems="center" justifyContent="space-between" key={data.id}>
            {position === "left" ? 
            <>
                <EffectImage />
                <Box ml={5} flex={1}>
                    <Text as="h5" color={useColorModeValue("#081c15", "#aafac8")} className={styles.encabezadoProyectos}>Proyecto Seleccionado</Text>
                    <Heading as="h3" size="2xl" color={useColorModeValue("#000000", "#f1faee")}>{data.title}</Heading>
                    <Text mt="10px" color={useColorModeValue("#081c15", "#b7b7a4")} noOfLines="5" width="400px" maxHeight="200px">
                        {data.desc}
                    </Text>
                    <List mt={5} display="flex" alignItems="center" textAlign="center">
                        {data.Tec.slice(0,5).map((el) => (
                            <ListItem className={styles.encabezadoProyectos} mx={4}>{el}</ListItem>
                        ))}
                    </List>
                    <Links l={data.links}/>
                </Box>
            </>
             : 
             <>
                <Box flex={1} mr={5}>
                    <Text as="h5" color={useColorModeValue("#081c15", "#aafac8")} className={styles.encabezadoProyectos}>Proyecto Seleccionado</Text>
                    <Heading as="h3" size="2xl" color={useColorModeValue("#000000", "#f1faee")}>{data.title}</Heading>
                    <Text mt="10px" color={useColorModeValue("#081c15", "#b7b7a4")} noOfLines="5" width="400px" maxHeight="200px">
                        {data.desc}
                    </Text>
                    <List mt={5} display="flex" alignItems="center" textAlign="center">
                        {data.Tec.slice(0,5).map((el) => (
                            <ListItem className={styles.encabezadoProyectos} fontWeight="100" mx={4}>{el}</ListItem>
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