import { useState } from 'react';
import styled from 'styled-components';

import './style.css';

import FeedTitle from './modules/Feed/pages/FeedTitle';
import GridViev from './modules/Feed/pages/GridViev';
import ListView from './modules/Feed/pages/ListView';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: 'Make a 10 Episode Minecraft Series',
      deadline: '2021-12-01',
      description: 'I will start a minecraft video series with other creators',
      rating: 15,
      comments: [],
      author: {
        avatar: 'https://thispersondoesnotexist.com/image',
        name: 'Cool author',
      },
      money: {
        raised: 10,
        goal: 150,
      },
    },
    {
      id: 1,
      title: 'I review $10,000 of online courses from Fake Gurus',
      deadline: '2021-10-28',
      description:
        'Buy all the top courses from notable gurus and actually give a detailed analysis on whether or not their coureses provide value and which ones are the best',
      rating: 5,
      comments: [],
      author: {
        avatar: 'https://thispersondoesnotexist.com/image',
        name: 'Author 2',
      },
      money: {
        raised: 5,
        goal: 10,
      },
    },
    {
      id: 2,
      title: 'I Learn How To Fly An Airplane',
      deadline: '2021-10-05',
      description:
        'Use the funds to learn how to fly an airplane and get a pilots license, and make a video documenting the progress.',
      rating: 0,
      comments: [],
      author: {
        avatar: 'https://thispersondoesnotexist.com/image',
        name: 'Author!',
      },
      money: {
        raised: 0,
        goal: 50,
      },
    },
    {
      id: 3,
      title: 'Give me free $10',
      deadline: '2021-10-05',
      description: 'i really want this $10 pls',
      rating: 25,
      comments: [],
      author: {
        avatar: 'https://thispersondoesnotexist.com/image',
        name: 'Another author',
      },
      money: {
        raised: 10,
        goal: 10,
      },
    },
    {
      id: 4,
      title: 'Create a Dating Show in NYC',
      deadline: '2022-03-05',
      description:
        'To have 6 strangers living in a house terrace house style and have a documentary style show about their lives and going on dates.',
      rating: -10,
      comments: [],
      author: {
        avatar: 'https://thispersondoesnotexist.com/image',
        name: 'Some dude',
      },
      money: {
        raised: 500,
        goal: 10845,
      },
    },
  ]);
  const [projectsToShow, setProjectsToShow] = useState(projects);

  const [viewStyle, setViewStyle] = useState(0);

  const searchBarHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const updatedProjectList = projects.filter((project) => {
      const title = project.title.toLocaleLowerCase();
      return title.includes(value);
    });
    setProjectsToShow(updatedProjectList);
  };

  const changeViewStyle = (n) => setViewStyle(n);

  const changeRating = (id, action) => {
    let projectItem = projects.filter((project) => project.id === id)[0];
    projectItem.rating =
      action === '+' ? projectItem.rating + 1 : projectItem.rating - 1;
    const updatedProjectList = projects.filter((project) => {
      return project.id === id ? projectItem : project;
    });
    setProjects(updatedProjectList);
  };

  const fundMoney = (id, money) => {
    let projectItem = projects.filter((project) => project.id === id)[0];
    projectItem.money.raised += parseInt(money);
    const updatedProjectList = projects.filter((project) => {
      return project.id === id ? projectItem : project;
    });
    setProjects(updatedProjectList);
  };

  const createNewProject = (info) => {
    let lastId = 0;
    projects.map((project) => (lastId = project.id));
    const newProject = {
      id: lastId + 1,
      title: info.title,
      deadline: info.deadline,
      description: info.description,
      rating: 0,
      comments: [],
      author: {
        avatar: 'https://thispersondoesnotexist.com/image',
        name: info.authorName,
      },
      money: {
        raised: 0,
        goal: info.goal,
      },
    };
    const updatedData = [...projects, newProject];
    setProjects(updatedData);
    setProjectsToShow(updatedData);
  };

  return (
    <AppWrapper>
      <FeedTitle
        searchInputHandler={searchBarHandler}
        viewStyle={viewStyle}
        toggleViewStyle={changeViewStyle}
        createNewProject={createNewProject}
      />
      {viewStyle ? (
        <ListView
          projects={projectsToShow}
          changeRating={changeRating}
          fundMoney={fundMoney}
        />
      ) : (
        <GridViev projects={projectsToShow} changeRating={changeRating} />
      )}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  font-family: 'Yaldevi';
  margin-top: 50px;
  width: 1185px;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 50px;
`;

export default App;
