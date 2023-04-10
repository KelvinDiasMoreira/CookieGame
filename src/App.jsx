import { useEffect, useState } from 'react'

import styled from "styled-components";
import CardBuy from "./components/CardBuy.jsx";
import CookieProvider from "./hooks/CookieProvider.jsx";

import cursor from "./assets/cursor.png";
import robot from "./assets/robot.png";
import muscle from "./assets/armmuscle.png";
import cookie from "./assets/cookie2.png";

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
  max-width: 100%;
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
  margin-top: 3rem;
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
  margin-top: 1em;
  margin-bottom: 1em;
`;

const ContainerShop = styled.div`
  width: 100%;
`;

function App() {
  const {contCookie, setCookie, cookiesPerSecond, isClicked, setClicked, state} = CookieProvider()

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
              {contCookie == 1
                ? `${contCookie} cookie`
                : `${contCookie} cookies`}
            </ContCookies>
            <PerSecond>Por Segundo: {cookiesPerSecond}</PerSecond>
          </div>
          <ModelGame
            draggable="false"
            src={cookie}
            alt="cookie"
            onClick={() => handleClick()}
          ></ModelGame>
          {isClicked == true ? <MoreCookie>+1 Cookie</MoreCookie> : ""}
        </Left>
        <Right>
          <ContainerShop>
            <Shoph1>Loja</Shoph1>
            <CardBuy
              cookiesValue={contCookie}
              img={cursor}
              name="Cursor"
              shopvalue={state.valueCursor}
              descriptionTolltip="Clicks automatico a cada 10 segundos"
            />
            <CardBuy
              cookiesValue={contCookie}
              img={robot}
              name="Robot"
              shopvalue={state.valueRobot}
              descriptionTolltip="Cada robo produz 1 cookie por segundo"
            />
            <CardBuy
              cookiesValue={contCookie}
              img={muscle}
              name="Muscle"
              shopvalue={state.valueMuscle}
              descriptionTolltip="Cada musculo produz 8 cookies por segundo"
            />
          </ContainerShop>
        </Right>
      </Container>
  );
}

export default App;
