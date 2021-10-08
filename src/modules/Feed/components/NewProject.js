import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const buttonThemes = {
  newProject: 'newProject',
  upload: 'upload',
  blue: 'blue',
};

const NewProject = ({ createNewProject }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValues, setInputValues] = useState({
    authorName: '',
    title: '',
    description: '',
    deadline: new Date(),
    goal: '',
  });

  const toggleModal = () => setModalVisible(!modalVisible);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleDatePicker = (date) =>
    setInputValues({ ...inputValues, deadline: date });

  const clearInputs = () => {
    setInputValues({
      authorName: '',
      title: '',
      description: '',
      deadline: '',
      goal: '',
    });
  };
  return (
    <>
      <FunctionalButton theme={buttonThemes.newProject} onClick={toggleModal}>
        Propose a project
      </FunctionalButton>
      {modalVisible && (
        <ModalWrapper>
          <Modal>
            <CloseButton onClick={toggleModal}>&#10005;</CloseButton>
            <Title>Pitch a project</Title>
            <Subtitle>Inspirational subtitle in one line maybe?</Subtitle>

            <Wrapper>
              <Row>
                <NumberWrapper>
                  <Number>1</Number>
                </NumberWrapper>
                <InputBlock>
                  <InputTitle>Insert creator's username.</InputTitle>
                  <InputWrapper>
                    <InputTag>Username</InputTag>
                    <Input
                      name='authorName'
                      value={inputValues.authorName}
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputBlock>
              </Row>
              <Row>
                <NumberWrapper>
                  <Number>2</Number>
                </NumberWrapper>
                <InputBlock>
                  <InputTitle>Start by naming your project.</InputTitle>
                  <InputWrapper>
                    <InputTag>Project Title</InputTag>
                    <Input
                      name='title'
                      value={inputValues.title}
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputBlock>
              </Row>
              <Row>
                <NumberWrapper>
                  <Number>3</Number>
                </NumberWrapper>
                <InputBlock>
                  <InputTitle>
                    Describe what you want the creator to make.
                  </InputTitle>
                  <InputWrapper>
                    <InputTag>Project description</InputTag>
                    <Input
                      name='description'
                      value={inputValues.description}
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputBlock>
              </Row>
              <Row>
                <NumberWrapper>
                  <Number>4</Number>
                </NumberWrapper>
                <InputBlock>
                  <InputTitle>
                    When you want this project to be finished?
                  </InputTitle>
                  <DatePickerWrapper>
                    <DatePicker
                      selected={inputValues.deadline}
                      dateFormat='yyyy-MM-dd'
                      name='deadline'
                      onChange={(date) => handleDatePicker(date)}
                      placeholderText='Click to select a date'
                      calendarStartDay={1}
                    />
                  </DatePickerWrapper>
                </InputBlock>
              </Row>
              <Row>
                <NumberWrapper>
                  <Number>5</Number>
                </NumberWrapper>
                <InputBlock>
                  <InputTitle>How much money you want to fund?</InputTitle>
                  <InputWrapper>
                    <InputTag>Fund goad</InputTag>
                    <Input
                      name='goal'
                      value={inputValues.goal}
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputBlock>
              </Row>
            </Wrapper>
            <ProposeButton
              onClick={() => {
                createNewProject(inputValues);
                clearInputs();
                toggleModal();
              }}>
              Propose a project
            </ProposeButton>
          </Modal>
        </ModalWrapper>
      )}
    </>
  );
};

const ProposeButton = styled.button`
  display: block;
  margin: 0 auto;
  font-family: 'Yaldevi';
  color: #282828;
  font-weight: 900;
  border: none;
  border-radius: 20px;
  padding: 5px 25px 5px 25px;
  font-size: 20px;
  background: #6b68f3;
  color: #fff;
`;

const FunctionalButton = styled.button`
  font-family: 'Yaldevi';
  color: #282828;
  font-weight: 900;
  border: none;
  border-radius: 20px;
  padding: 5px 25px 5px 25px;
  font-size: 20px;

  background: rgb(243, 136, 24);
  background: -moz-linear-gradient(
    0deg,
    rgba(243, 136, 24, 0.65) 0%,
    rgba(249, 123, 77, 0.65) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(243, 136, 24, 0.65) 0%,
    rgba(249, 123, 77, 0.65) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(243, 136, 24, 0.65) 0%,
    rgba(249, 123, 77, 0.65) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f38818",endColorstr="#f97b4d",GradientType=1);

  ${(props) =>
    props.theme === buttonThemes.newProject &&
    `
    margin-left: 45px;
`}
  ${(props) =>
    props.theme === buttonThemes.upload &&
    `
    justify-content: center;
`}
${(props) =>
    props.theme === buttonThemes.blue &&
    `
    background: #6b68f3;
    color: #fff;
`}
`;
const ModalWrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Modal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 630px;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
  flex-wrap: wrap;
  z-index: 3;
  padding: 30px 25px 20px 25px;
`;
const CloseButton = styled.button`
  position: absolute;
  margin: 0;
  top: 25px;
  right: 25px;
  font-weight: 900;
  color: #000;
  background: #eeeeee;
  border: none;
  border-radius: 100%;
  padding: 5px 10px 5px 10px;
`;
const DatePickerWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 20px;
`;
const InputBlock = styled.div`
  flex-grow: 2;
`;
const Title = styled.h1`
  text-align: center;
  font-family: 'Yaldevi';
  font-size: 55px;
  font-weight: 900;
  color: #282828;
  margin-bottom: 0;
`;
const Subtitle = styled.p`
  color: #666564;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 45px 10px 25px;
  column-gap: 500px;
`;
const NumberWrapper = styled.div`
  flex-grow: 0;
`;
const Number = styled.p`
  color: #1c1c26;
  background: #dccbf5;
  padding: 5px 10px 5px 10px;
  border-radius: 100%;
  font-family: 'Yandevi';
  font-size: 20px;
  font-weight: 900;
`;
const InputTitle = styled.div`
  display: inline-block;
  color: #666564;
  font-size: 20px;
  font-family: 'Yandevi';
`;
const InputWrapper = styled.div`
  border: 1px solid #666564;
  border-radius: 5px;
  position: relative;
  font-family: 'Yandevi';
  margin-top: 10px;
  margin-bottom: 25px;
`;
const InputTag = styled.label`
  position: absolute;
  font-size: 16px;
  color: #666564;
  padding-left: 15px;
  margin-top: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 21px 0 10px 15px;
`;

export default NewProject;
