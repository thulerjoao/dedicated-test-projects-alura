import styled from "styled-components";

export const SortContainer = styled.div`
  position: absolute;
  top: 367px;
  z-index: 10;
  background-color: #fff9eb;
  width: calc(100% - 4px);
  min-height: calc(100% - 371px);
  border: 2px solid black;
  border-radius: 64px 64px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h1 {
    font-size: 30px;
    color: #4b69fd;
    margin-top: 53px;
    margin-bottom: 36px;
  }

  h2 {
    max-width: 400px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin-top: 32px;
  }

  .sortButton {
    margin-top: 24px;
    box-sizing: border-box;
    width: 227px;
    height: 80px;
    border-radius: 37.5px;
    background-color: #fe652b;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 44px;
    cursor: pointer;

    p {
      color: white;
      font-size: 22px;
      text-align: center;
    }
  }

  .result {
    color: #fe652b;
    font-size: 25px;
    font-weight: 400;
    font-style: poppins;
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;
