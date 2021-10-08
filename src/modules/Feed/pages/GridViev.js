import styled from 'styled-components';

import ProjectInGrid from '../components/Project_inGrid';

const GridViev = ({ projects, changeRating }) => {
  return (
    <GridWrapper>
      {projects.map((project) => (
        <ProjectInGrid
          key={project.id}
          id={project.id}
          title={project.title}
          comments={project.comments}
          description={project.description}
          rating={project.rating}
          author={project.author}
          money={project.money}
          deadline={project.deadline}
          changeRating={changeRating}
        />
      ))}
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: flex;
  gap: 10px 30px;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export default GridViev;
