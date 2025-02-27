import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 10px;

  display: flex;
  justify-content: space-between;

  button,
  input {
    background-color: rgb(224, 224, 224); /* Cor de fundo */
    color: #333; /* Cor do texto */
    font-size: 16px; /* Tamanho da fonte */
    padding: 10px 20px; /* Espaçamento interno para o botão e input */
    border: 1px solid #ccc; /* Borda leve */
    border-radius: 5px; /* Bordas arredondadas */
    transition: all 0.3s ease; /* Transição suave para todos os efeitos */
    cursor: pointer; /* Cursor de pointer para indicar interatividade */
    outline: none; /* Remove o contorno padrão do input */
  }

  .container {
    width: 49.5%;
    height: 100%;
    background: #6191b7;

    border-radius: 10px;

    .title {
      width: 100%;
      height: 15%;

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
      flex-wrap: wrap; /* Permite que os itens se quebrem em várias linhas */
      justify-content: center; /* Centraliza os itens na linha */
      align-items: center; /* Alinha os itens verticalmente */

      .contentButton {
        width: 25%; /* Ajustando a largura dos botões para que caibam 3 por linha */
        height: 25%; /* Definindo uma altura fixa para os botões */
        margin: 10px; /* Adicionando um pouco de espaço entre os botões */

        button {
          width: 100%; /* Faz com que o botão ocupe toda a largura do contêiner */
          height: 100%; /* Faz com que o botão ocupe toda a altura do contêiner */
          font-size: 16px; /* Define o tamanho da fonte */
          cursor: pointer; /* Define o cursor como pointer para indicar que é clicável */
        }

        button:focus {
          outline: none;
          border-color: rgb(0, 52, 92);
        }

      }
    }

    .buttonConfirm {
      width: 100%;
      height: 20%;

      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 25%;
        height: 50%;
      }
    }
  }
`;
