import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 0;
  margin-bottom: 0.5em;
  padding-top: 10px;
  color: ${(props) => props.inputColor || "palevioletred"};
`;

export const ButtonText = styled.h3`
  color: ${(props) => props.inputColor || "chocolate"};
  margin-right: 5px;
`;

export const Wrapper = styled.section`
  background: papayawhip;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const NewListRow = styled.div`
  display: flex;
  fler-direction: row;
  width: 100%;
  justify-content: center;
`;

export const MyButton = styled.button`
  background-color: papayawhip;
  &:hover {
    background-color: green;
  }
  display: flex;
  align-self: center;
`;

export const ContentWrapper = styled.section`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: flexstart;
  width: 40vw;
`;

export const TitleRow = styled.section`
  background: green;
  display: flex;
  width: 100%;
  height: 10vh;
  flex-direction: row;
  justify-content: center;
`;

export const Input = styled.input`
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 0px;
  width: 90%;
  height: 20px;
  margin-bottom: 0.5em;
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RemoveButton = styled.button`
  background-color: red;
  border: none;
  height: 22px;
  width: 22px;
  margin-bottom: 0.5em;
`;

export const TodoRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const RemoveListButton = styled.button`
  background-color: red;
  border: none;
  height: 24px;
`;

export const SubmitButton = styled.input`
  color: white;
  background: green;
  border: none;
  border-radius: 0px;
  width: 20%;
  height: 20px;
  margin-bottom: 0.5em;
  margin-left: 0.5em;
  align-self: flex-start;
  display: flex;
`;
