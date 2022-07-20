import { Box } from '@chakra-ui/react';

import ProjectCard from './ProjectCard';

const ProjectList = ({ data }) => {
  return (
    <Box display='flex' flexDir='column' mt='20px'>
      {data.map((el, index) => (
        <ProjectCard
          key={index}
          data={el}
          position={el.id % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </Box>
  );
};

export default ProjectList;
