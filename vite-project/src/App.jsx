import { useState } from "react";
import styled from "styled-components";
import CardBuy from "./components/CardBuy.jsx";

import cursor from "../public/cursor.png"
import robot from "../public/robot.png"
import muscle from "../public/armmuscle.png"

const Container = styled.div`
  background-color: #4f4c4c;
  height: 50vw;
  margin: 2rem 5rem 0 5rem;
  border-radius: 2rem;
  display: flex;
`;

const Left = styled.div`
  background-color: #575252;
  border-radius: 2rem;
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
`;

const ModelGame = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 500%;
  cursor: pointer;
  margin-top: 3rem;
  transition: 0.3s ease-in-out;
  animation: rotate 50s infinite linear;

  &:hover {
    width: 230px;
    height: 230px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ContCookies = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: 5rem;
  margin-block-end: 0;
`;

const PerSecond = styled.p`
  font-weight: 800;
  margin-block-start: 0;
  text-align: center;
`;

const MoreCookie = styled.h2`
  animation-name: morecookieeffect;
  animation-duration: 1s;

  @keyframes morecookieeffect {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(-400px);
      opacity: 0%;
    }
  }
`;
const Shoph1 = styled.h1`
text-align: center;
font-size: 2.5rem;
font-weight: 800;
font-style: italic;
`;

const ContainerShop = styled.div`
  width: 90%;
`;

function App() {
  const [contCookie, setCookie] = useState(0);
  const [contPerSecond, setPerSecond] = useState(0.0);
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setCookie(contCookie + 1);
    if (isClicked == true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <Container>
      <Left>
        <div>
          <ContCookies>
            {contCookie == 1 ? `${contCookie} cookie` : `${contCookie} cookies`}
          </ContCookies>
          <PerSecond>Por Segundo: {contPerSecond}</PerSecond>
        </div>
        <ModelGame
          draggable="false"
          src="cookie2.png"
          alt="cookie"
          onClick={() => handleClick()}
        ></ModelGame>
        {isClicked == true ? <MoreCookie>+1 Cookie</MoreCookie> : ""}
      </Left>
      <Right>
        <ContainerShop>
          <Shoph1>Loja</Shoph1>
          <CardBuy
          img={cursor}
          name="Cursor" 
          description="Clicks automatico a cada 10 segundos"
          shopvalue="15"
          />
          <CardBuy 
          img={robot}
          name="Robo" 
          description="Clicks automatico a cada 10 segundos"
          shopvalue="100"
          />
          <CardBuy 
          img={muscle}
          name="muscle" 
          description="Clicks automatico a cada 10 segundos"
          shopvalue="1,100"
          />
        </ContainerShop>
      </Right>
    </Container>
  );
}

export default App;
