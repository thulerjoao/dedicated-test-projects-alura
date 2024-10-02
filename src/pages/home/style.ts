import styled from "styled-components";

export const HomeScreenContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #4b69fd;
  
  .imagens {
    margin-top: 121px;
    display: flex;
    align-items: start;
    justify-content: center;
    z-index: 100;
  }

  .bottomComponent {
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
      margin-top: 87px;
      margin-bottom: 36px;
    }

    li {
      list-style-type: none;
      padding: 0;
      margin: 0;
      margin-top: 30px;
    }

    ul {
      padding: 8px 16px;
      margin: 4px 0;
      background-color: #f0f0f0;
      border-radius: 4px;
      color: #333;
      font-family: Arial, sans-serif;
      font-size: 16px;
    }
    
    .playContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 726px;
      margin: 0px 32px;
      margin-top: 15px;
      padding-bottom: 5rem;
      
      .playButton {
        width: 351px;
        height: 80px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        overflow: hidden;
        border: 2px solid black;
        background-color: #fe652b;
        cursor: pointer;

        img {
          margin-left: 39px;
          margin-right: 26px;
        }

        button {
          width: 100%;
          height: 100%;
          background-color: transparent;
          color: white;
          font-size: 20px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          text-align: start;
        }
      }
    }
  }
`;
