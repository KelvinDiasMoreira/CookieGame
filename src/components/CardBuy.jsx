import { useContext } from "react";

import styled from "styled-components"
import CookieContext from "../context/CookieContext";

const Container = styled.div`
box-shadow: 10px 5px 5px black;
margin: 0 auto 1.5em auto;
max-width: 90%;
background-color: gray;
border-radius: 1em;
display: grid;
grid-template-areas: 
        'img title value';
gap:0.5em;
cursor: pointer;
user-select: none;
transition: 0.5s ease-in-out;

 &:hover{
    background-color: #cbcbcb;
    width: 100%;
 }


`;

const ContainerImg = styled.img`
margin: 1em 1em 1em 1em;
max-width: 3em;
max-height: 3em;
grid-area: img;
`;

const Title = styled.h3`
text-align: center;
margin: 1em 1em 1em 1em;
grid-area: title;
font-size: 1.5em;
`;

const ShopValue = styled.h3`
margin: 1em 1em 1em 1em;
grid-area: value;
text-align: center;
font-size: 1.5em;
color: #db0202;
`;

export default function CardBuy({img, name, shopvalue, cookiesValue}){

    const {setCookie} = useContext(CookieContext);


    function buyShopContents(){
        if (name == "Muscle" &&  cookiesValue >= shopvalue) {
            console.log("oi1")
            setCookie(cookiesValue - shopvalue );
        }
        if(name == "Robot" && cookiesValue >= shopvalue){
            console.log("oi2")
            setCookie(cookiesValue - shopvalue);
        } 
        if(name == "Cursor" && cookiesValue >= shopvalue){
            console.log("oi3")
            setCookie(cookiesValue - shopvalue);
        }
        else{
            console.log(cookiesValue)
        }
      }
    return (
        <Container onClick={() => buyShopContents()}>
            <ContainerImg src={img}></ContainerImg>
            <Title>{name}</Title>
            <ShopValue>{shopvalue}</ShopValue>
        </Container>
    )
} 