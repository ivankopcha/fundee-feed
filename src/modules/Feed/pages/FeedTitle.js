import styled from 'styled-components';

import NewProject from '../components/NewProject';

const FeedTitle = ({
  searchInputHandler,
  viewStyle,
  toggleViewStyle,
  createNewProject,
}) => {
  return (
    <FeedTitleWrapper>
      <ProjectsTitle>Projects</ProjectsTitle>
      <NewProject createNewProject={createNewProject}>
        Propose a project
      </NewProject>
      <SearchBar>
        <SearchIcon className='fas fa-search'></SearchIcon>
        <SearchInput
          onChange={searchInputHandler}
          placeholder='Search for projects'
        />
      </SearchBar>
      <ViewWrapper>
        <ViewIcon
          toggled={viewStyle}
          className='fas fa-list'
          onClick={() => toggleViewStyle(1)}
        />
        <ViewIcon
          toggled={!viewStyle}
          className='fas fa-th-large'
          onClick={() => toggleViewStyle(0)}
        />
      </ViewWrapper>
    </FeedTitleWrapper>
  );
};

const FeedTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin-bottom: 30px;

  @media (max-width: 890px) {
    align-items: center;
  }
`;
const ProjectsTitle = styled.h1`
  font-family: 'Yaldevi';
  color: #282828;
  font-size: 45px;
  font-weight: 900;
`;
const SearchBar = styled.div`
  position: relative;
  font-family: 'Yandevi';
  flex-grow: 1;
  text-align: center;
`;
const ViewWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  column-gap: 15px;
`;
const SearchIcon = styled.i`
  position: absolute;
  font-size: 16px;
  color: #666564;
  padding-left: 10px;
  margin-top: 17.5px;
  opacity: 0.7;
`;
const SearchInput = styled.input`
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  background: #f8f8fa;
  padding: 15px 11px 15px 31px;
  font-family: 'Yandevi';
  color: #666564;
  width: 250px;
`;

const ViewIcon = styled.i`
  font-size: 20px;
  border: 1px solid #b7b7cc;
  border-radius: 5px;
  padding: 10px;
  color: #b7b7cc;
  transition: 0.3s;
  ${(props) =>
    props.toggled &&
    `
    color: #6b68f3;
  `}
`;

export default FeedTitle;
