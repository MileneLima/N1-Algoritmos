import styled from "styled-components";
import brand from "../../assets/weg-logo.png";

export const Barra = styled.div`
  position: fixed;
  width: 100%;
  height: 90px;
  padding: 20px;
  background-color: #ffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  .dateHour {
    width: 170px;
    
    p {
      margin-left: 5px;
      float: left;
    }
  }
`;

export const Logo = styled.div`
  width: 70px;
  height: 48px;

  background: url(${brand}) no-repeat;
  background-size: cover;
  float: left;
`;
