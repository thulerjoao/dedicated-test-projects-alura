import styled from "styled-components";

export const InputContainer = styled.div`
  height: 82px;
  width: 100%;
  max-width: 726px;
  margin: 0px 32px;
  border: 2px solid black;
  border-radius: 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  overflow: hidden;

  img {
    margin-left: 52px;
    margin-right: 31px;
  }

  input {
    height: calc(100% - 2px);
    width: 100%;
    text-decoration: none;
    border: none;
    outline: none;
  }

  input::placeholder {
    color: #0000004d;
  }

  button {
    text-decoration: none;
    border: none;
    height: 100%;
    width: 227px;
    border-left: 2px solid black;
    color: #444444;
    cursor: pointer;
  }
`;
