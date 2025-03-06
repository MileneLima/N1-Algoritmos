import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 10px;

  background-color: #d3e0cb;

  display: flex;
  justify-content: center;

  button,
  input {
    background-color: #dee8d8;
    color: #333;
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    outline: none;
  }

  .container {
    width: 49.5%;
    height: 100%;
    background: rgb(102, 129, 84);

    border-radius: 10px;

    .title {
      width: 100%;
      height: 10%;

      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        margin: 0;
      }
    }

    .subtitle {
      width: 100%;
      height: 10%;

      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .input {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        width: 50%;
        height: 80%;
      }

      input:focus {
        outline: none;
        border-color: rgb(0, 52, 92);
      }
    }

    .buttons {
      width: 100%;
      height: 45%;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .contentButton {
        width: 25%;
        height: 25%;
        margin: 10px;

        button {
          width: 100%;
          height: 100%;
          font-size: 16px;
          cursor: pointer;
        }

        button:focus {
          outline: none;
          border-color: rgb(0, 52, 92);
        }
      }
    }

    .buttonConfirm {
      width: 100%;
      height: 15%;

      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 25%;
        height: 70%;
      }
    }

    .return {
      width: 100%;
      height: 10%;

      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 20%;
        height: 40%;

        background-color: #dee8d8;
        color: #333;
        
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
