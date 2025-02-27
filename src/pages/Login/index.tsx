import React, { useState } from "react";
import { Page } from "./styles";

const VirtualKeyboard: React.FC = () => {
  const [password, setPassword] = useState("");

  const buttons = [
    ["3", "9"],
    ["0", "5"],
    ["2", "8"],
    ["1", "4"],
    ["6", "7"],
    ["⌫"],
  ];

  const handleClick = (value: string) => {
    if (value === "⌫") {
      setPassword(password.slice(0, -1));
    } else {
      setPassword(password + value);
    }
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
              <div className="contentButton">
                <button
                  key={index}
                  onClick={() =>
                    handleClick(
                      Array.isArray(pair)
                        ? pair[Math.floor(Math.random() * 2)]
                        : pair
                    )
                  }
                >
                  {Array.isArray(pair) ? `${pair[0]} ou ${pair[1]}` : pair}
                </button>
              </div>
            ))}
          </div>

          <div className="buttonConfirm">
            <button>Acessar</button>
          </div>
        </div>

        <div className="container"></div>
      </Page>
    </>
  );
};

export default VirtualKeyboard;
