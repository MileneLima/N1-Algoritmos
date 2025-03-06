import React, { useState } from "react";
import { Page } from "./styles";
import { FiDelete } from "react-icons/fi";

const VirtualKeyboard: React.FC = () => {
  const [password, setPassword] = useState("");

  const buttons = [
    ["3", "9"],
    ["0", "5"],
    ["2", "8"],
    ["1", "4"],
    ["6", "7"],
  ];

  const handleButtonClick = (value: string) => {
    setPassword((prev) => prev + value);
    console.log(value);
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <title>n1</title>

      <Page>
        <div className="container">
          <div className="title">
            <p>Teclado virtual</p>
          </div>

          <div className="subtitle">
            Digite sua senha eletrônica no teclado virtual:
          </div>

          <div className="input">
            <input type="password" value={password} readOnly />
          </div>

          <div className="buttons">
            {buttons.map((pair, index) => (
              <div className="contentButton" key={index}>
                <button onClick={() => handleButtonClick(pair[Math.floor(Math.random() * pair.length)])}>
                  {Array.isArray(pair) ? `${pair[0]} ou ${pair[1]}` : pair}
                </button>
              </div>
            ))}
            <div className="contentButton">
              <button onClick={handleDelete}>
                <FiDelete size={30} />
              </button>
            </div>
          </div>

          <div className="buttonConfirm">
            <button>Acessar</button>
          </div>

          <div className="return">
            <p>Sucesso | Erro </p>
          </div>
        </div>
      </Page>
    </>
  );
};

export default VirtualKeyboard;
