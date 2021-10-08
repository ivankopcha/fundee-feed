import styled from 'styled-components';

const ProjectOnHover = ({ rating, id, changeRating }) => {
  return (
    <HoverWrapper>
      <HoverContainer>
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
      </HoverContainer>
    </HoverWrapper>
  );
};

const HoverWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 65%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;
const HoverContainer = styled.div`
  margin-left: 35px;
  margin-top: 150px;
`;
const Rating = styled.p`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
`;
const ArrowIcon = styled.button`
  border-radius: 5px;
  background: #ffffff;
  padding: 8px;
  display: inline-block;
  transition: 0.3s;
  border: none;
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

export default ProjectOnHover;
