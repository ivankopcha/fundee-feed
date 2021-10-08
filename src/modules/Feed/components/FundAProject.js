import { useState } from 'react';
import styled from 'styled-components';

const ModalButtonThemes = {
  blue: 'blue',
  gray: 'gray',
};

const FundAProject = ({ title, authorName, id, fundMoney }) => {
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const inputHandler = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) setInputValue(value);
  };

  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <Fund>
      <FundInputWrapper>
        <FundInput value={inputValue} onChange={inputHandler} />
        <FundInputIcon>$</FundInputIcon>
      </FundInputWrapper>
      <Button onClick={toggleModal}>Fund</Button>

      {modalVisible && (
        <ModalWrapper>
          <Modal>
            <Title>
              Are you sure you want to send <b>${inputValue}</b> to{' '}
              <b>{title}</b> created by <i>{authorName}</i>
            </Title>
            <ModalButton theme='gray' onClick={toggleModal}>
              Cancel
            </ModalButton>
            <ModalButton
              theme='blue'
              onClick={() => {
                fundMoney(id, inputValue);
                toggleModal();
                setInputValue('');
              }}>
              Yes,continue
            </ModalButton>
          </Modal>
        </ModalWrapper>
      )}
    </Fund>
  );
};

const Fund = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const FundInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: 'Yandevi';
`;
const FundInputIcon = styled.i`
  position: absolute;
  font-size: 22px;
  color: #666564;
  padding-left: 10px;
  margin-top: 7px;
  right: 70px;
  opacity: 0.7;
  font-weight: 900;
`;
const FundInput = styled.input`
  border: 1px solid #666564;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  background: none;
  padding: 10px 7px 10px 28px;
  font-family: 'Yandevi';
  color: #000;
  width: 50px;

  &:focus + i {
    color: #000;
  }
`;

const Button = styled.button`
  color: #ffffff;
  background: #6b68f3;
  border: none;
  padding: 15px 45px 15px 45px;
  margin-left: 10px;
  border-radius: 35px;
  font-size: 15px;
  font-weight: 600;
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 530px;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
  flex-wrap: wrap;
  z-index: 3;
  /* padding: 50px 25px 30px 25px; */
  padding: 35px 0 25px 0;
`;
const Title = styled.p`
  font-size: 20px;
  margin-bottom: 25px;
`;
const ModalButton = styled.button`
  padding: 15px 70px 15px 70px;
  margin-left: 10px;
  border-radius: 35px;
  font-size: 15px;
  font-weight: 600;

  ${(props) =>
    props.theme === ModalButtonThemes.blue &&
    `
  color: #ffffff;
  background: #6b68f3;
  border: none;
  `}
  ${(props) =>
    props.theme === ModalButtonThemes.gray &&
    `
    color: #666564;
    background: none;
    border: 1px solid #666564;
  `}
`;

export default FundAProject;
