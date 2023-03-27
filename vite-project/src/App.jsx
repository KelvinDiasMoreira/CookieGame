import { useState } from "react";
import styled from "styled-components";
import './moreCookie.css'

const Container = styled.div`
  min-height: 100vw;
  margin: 2rem 5rem 0 5rem;
  border-radius: 1rem;
  display: flex;
`;

const Left = styled.div`
  background-color: green;
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  background-color: blue;
  flex: 2;
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
 animation-name: rotate;
 animation-duration: infinite;

  &:hover {
    width: 230px;
    height: 230px;
  }

  @keyframes rotate {
   from{
    transform: rotate(50deg);
   }
   to{
    transform: rotate(360deg);
   } 
  }
`;


const ContCookies = styled.h2`
  font-size: 2.5rem; 
  font-weight: 800;
  margin-top: 5rem;
`;

const PerSecond = styled.p`
  font-weight: 800;
`;

const MoreCookie = styled.h2`

`;

function App() {
  const [contCookie, setCookie] = useState(0);
  const [contPerSecond, setPerSecond] = useState(0);
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setCookie(contCookie + 1);
    if(isClicked == true){
      setClicked(false);
    }
    else{
      setClicked(true);
      }
  }

  return (
    <Container>
      <Left>
        <ContCookies>{contCookie == 1 ? `${contCookie} cookie`:  `${contCookie} cookies`}</ContCookies>
        <PerSecond>Por Segundo: {contPerSecond}</PerSecond>
        <ModelGame src="cookie.png" alt="cookie" onClick={() => handleClick()}></ModelGame>
        {isClicked == true ? <MoreCookie className={`${isClicked ? 'moreCookie': '' }`}>+1 Cookie</MoreCookie> : ''}
      </Left>
      <Right>
        <h1>Hi</h1>
      </Right>
    </Container>
  );
}

export default App;
