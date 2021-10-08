import ProjectInList from '../components/Project_InList';

const ListView = ({ projects, changeRating, fundMoney }) =>
  projects.map((project) => (
    <ProjectInList
      id={project.id}
      key={project.id}
      title={project.title}
      comments={project.comments}
      description={project.description}
      rating={project.rating}
      author={project.author}
      money={project.money}
      deadline={project.deadline}
      changeRating={changeRating}
      fundMoney={fundMoney}
    />
  ));

export default ListView;
