import { useState } from 'react';
import styled from 'styled-components';

import ProjectOnHover from './ProjectOnHover_inGrid';
import countDays from './countDays';

const ProjectInGrid = ({
  id,
  title,
  deadline,
  comments,
  description,
  rating,
  author,
  money,
  changeRating,
}) => {
  const [hovered, setHovered] = useState(false);

  const daysLeft = countDays(deadline);
  const avatar = author.avatar;
  const authorName = author.name;
  const raised = money.raised;
  const goal = money.goal;
  const completed = ((raised / goal) * 100).toFixed();
  const completed_forStyle = completed > 100 ? 100 : completed;

  const MouseOver = (e) => {
    e.preventDefault();
    setHovered(true);
  };
  const MouseOut = (e) => {
    e.preventDefault();
    setHovered(false);
  };

  return (
    <ItemWrapper>
      <ProjectImageWrapper
        onMouseEnter={(e) => MouseOver(e)}
        onMouseLeave={(e) => MouseOut(e)}>
        <ProjectImage
          src='https://fundee.io/images/feed/project_img_placeholder_3.png'
          alt='project image'
        />
        {hovered && (
          <ProjectOnHover rating={rating} changeRating={changeRating} id={id} />
        )}
      </ProjectImageWrapper>
      <InfoWrapper>
        {/* TITLE */}
        <ProjectTitle>{title}</ProjectTitle>
        <TextWithIconWrapper>
          {/* DEADLINE */}
          <TextWithIcon>
            <Icon className='far fa-clock' />
            {daysLeft} days left
          </TextWithIcon>
          {/* COMMENTS */}
          <TextWithIcon>
            <Icon className='fas fa-comment' />
            {comments.length} comments
          </TextWithIcon>
        </TextWithIconWrapper>
        {/* DESCRIPTION */}
        <Description>{description}</Description>
        {/* AUTHOR */}
        <AuthorAvatar src={avatar} alt='author image' />
        <AuthorName>{authorName}</AuthorName>
      </InfoWrapper>
      {/* MONEY */}
      <MoneyChart>
        <MoneyFilledChart
          style={{ width: completed_forStyle + '%' }}></MoneyFilledChart>
      </MoneyChart>
      {/* MONEY INFO */}
      <RaisedMoneyWrapper>
        <TextWithIconWrapper money>
          <TextWithIcon>
            <Icon className='far fa-money-bill-alt' />${raised}/${goal}
          </TextWithIcon>
          <TextWithIcon>{completed}% raised</TextWithIcon>
        </TextWithIconWrapper>
      </RaisedMoneyWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  text-align: justify;
  border-radius: 10px;
  width: calc(33% - 30px);

  @media (max-width: 1100px) {
    width: calc(50% - 30px);
  }
  @media (max-width: 675px) {
    border: 1px solid red;
    width: 100%;
  }
`;
const InfoWrapper = styled.div`
  padding: 16px;
  font-family: Yaldevi;
`;
const ProjectImageWrapper = styled.div`
  position: relative;
  height: 200px;
  padding: 0;
`;
const ProjectImage = styled.img`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const TextWithIconWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: flex-start;
  column-gap: 15px;

  ${(props) =>
    props.money &&
    `
  justify-content: space-between;
  `}
`;
const TextWithIcon = styled.div``;
const Icon = styled.i`
  color: #666564;
  margin-right: 8px;
`;
const Description = styled.p`
  margin-top: 11.2px;
  margin-bottom: 32px;
  color: #666564;
`;
const ProjectTitle = styled.h3`
  float: left;
  margin-top: 0;
  margin-bottom: 11.2px;
  font-weight: 600;
  font-size: 22.4px;
  width: 100%;
  color: #282828;
`;
const AuthorAvatar = styled.img`
  height: 45px;
  border-radius: 100%;
  vertical-align: middle;
`;
const AuthorName = styled.i`
  color: #666564;
  margin-left: 16px;
`;
const MoneyChart = styled.div`
  width: 90%;
  height: 8px;
  margin: 0 auto;
  background-color: rgba(173, 173, 172, 0.5);
  border-radius: 10px;
  z-index: 1;
`;
const MoneyFilledChart = styled.div`
  height: 8px;
  border-radius: 10px;
  z-index: 2;
  background: rgb(255, 187, 0);
  background: linear-gradient(
    45deg,
    rgba(255, 187, 0, 0.5) 0%,
    rgba(170, 59, 165, 0.5) 65%,
    rgba(29, 15, 242, 0.5) 100%
  );
`;
const RaisedMoneyWrapper = styled.div`
  color: #575757;
  font-family: 'Yaldevi';
  padding: 16px;
  font-size: 16px;
`;

export default ProjectInGrid;
