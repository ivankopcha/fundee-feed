import styled from 'styled-components';

import countDays from './countDays';
import FundAProject from './FundAProject';

const ProjectInList = ({
  id,
  rating,
  comments,
  title,
  description,
  author,
  money,
  deadline,
  changeRating,
  fundMoney,
}) => {
  const daysLeft = countDays(deadline);
  const raised = money.raised;
  const goal = money.goal;
  const completed = ((raised / goal) * 100).toFixed();
  const completed_forStyle = completed > 100 ? 100 : completed;
  return (
    <Wrapper>
      <Left>
        <ArrowIcon
          up
          className='fas fa-arrow-up'
          onClick={() => changeRating(id, '+')}
        />
        <Rating>{rating}</Rating>
        <ArrowIcon
          down
          className='fas fa-arrow-down'
          onClick={() => changeRating(id, '-')}
        />
      </Left>
      <Right>
        <Preview>
          <ProjectImage src='https://fundee.io/images/feed/project_img_placeholder_3.png' />
          <Icon className='fas fa-comment' />
          <Comments>{comments.length} comments</Comments>
        </Preview>
        <ProjectInfo>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <AuthorAvatar src={author.avatar} />
          <AuthorName>{author.name}</AuthorName>

          <LowerBlock>
            <MoneyGoal>
              <MoneyChart>
                <MoneyFilledChart
                  style={{
                    width: completed_forStyle + '%',
                  }}></MoneyFilledChart>
              </MoneyChart>
              <MoneyInfo>
                <RaisedInfo>
                  <i className='far fa-money-bill-alt' />
                  <RaisedNumbers>
                    ${raised}/${goal}
                  </RaisedNumbers>
                </RaisedInfo>
                <MoneyPercent> {completed}% raised </MoneyPercent>
              </MoneyInfo>
            </MoneyGoal>
            <FundAProject
              title={title}
              authorName={author.name}
              id={id}
              fundMoney={fundMoney}
            />
            <Deadline>
              <i className='far fa-clock' />
              <DeadlineText>{daysLeft} days left</DeadlineText>
            </Deadline>
          </LowerBlock>
        </ProjectInfo>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px 10px 15px 10px;
  display: flex;
  flex-flow: row nowrap;
  column-gap: 10px;
`;
const Left = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: center;
`;
const ArrowIcon = styled.i`
  display: block;
  transition: 0.3s;
  color: #666564;

  ${(props) =>
    (props.up &&
      `
    &:hover { color: #00d9a9 }
  `) ||
    (props.down &&
      `
  &:hover { color: #ff0000 }  
  `)}
`;
const Rating = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Right = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Preview = styled.div`
  width: 40%;
  flex-grow: 1;
`;
const ProjectImage = styled.img`
  display: block;
  width: 90%;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const Icon = styled.i`
  color: #666564;
`;
const Comments = styled.span`
  margin-left: 5px;
  color: #666564;
`;
const ProjectInfo = styled.div`
  flex-grow: 2;
  width: 60%;

  @media (max-width: 1070px) {
    width: 90%;
  }
`;
const Title = styled.h2`
  margin-top: 10px;
`;
const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 30px;
  color: #666564;
`;
const AuthorAvatar = styled.img`
  height: 45px;
  border-radius: 100%;
  vertical-align: middle;
`;
const AuthorName = styled.i`
  margin-left: 10px;
`;
const LowerBlock = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;
const MoneyGoal = styled.div`
  flex-grow: 2;

  @media (max-width: 1070px) {
    width: 100%;
  }
`;
const MoneyChart = styled.div`
  width: 100%;
  height: 8px;
  margin: 0 auto;
  background-color: rgba(173, 173, 172, 0.5);
  border-radius: 10px;
  z-index: 1;
`;
const MoneyInfo = styled.div`
  margin-top: 15px;
  color: #666564;
`;
const RaisedInfo = styled.div`
  float: left;
`;
const RaisedNumbers = styled.p`
  display: inline;
  margin-left: 5px;
`;
const MoneyPercent = styled.p`
  float: right;
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
const Deadline = styled.div`
  flex-grow: 1;
  color: #666564;
`;
const DeadlineText = styled.p`
  display: inline;
  margin-left: 5px;
`;

export default ProjectInList;
