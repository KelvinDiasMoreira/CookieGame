import styled from "styled-components"

const Container = styled.div`
box-shadow: 10px 5px 5px black;
margin: 0 auto 1.5em auto;
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

// const Description = styled.p`
// margin: 1em 1em 1em 1em;
// grid-area: value;
// text-align: center;
// `;

const ShopValue = styled.h3`
margin: 1em 1em 1em 1em;
grid-area: value;
text-align: center;
font-size: 1.5em;
color: #db0202;
`;
export default function CardBuy(props){
    return (
        <Container>
            <ContainerImg src={props.img}></ContainerImg>
            <Title>{props.name}</Title>
            <ShopValue>{props.shopvalue}</ShopValue>
        </Container>
    )
} 