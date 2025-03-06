import styled from "styled-components";
import { Card, Button } from "@mui/material";

const getColor = (btnSelected) => {
  if (btnSelected) return "245, 48, 48";

  return "200, 200, 200";
};

// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   width: 25%;
//   border-radius: 15px;
//   border: 2px solid black;
//   background-color: ${(props) => `rgb(${getColor(props?.$color)})`};
//   transition: 0.25s ease;
//   cursor: pointer;

//   &:hover {
//     background-color: rgba(253, 33, 33, 0.2);
//   }
// `;

export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
  color: purple;
`;

export const SubTitle = styled.h3``;

export const TextBody = styled.p`
  font-size: 14px;
  background: green;
`;

export const RouteDexNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 5px 15px;
  justify-content: flex-end;

  border-radius: 20px;
  background-color: rgb(149, 149, 149);
  width: 100%;
`;
export const RoutesDisplayContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
  padding: 4px;
  margin: 5px;
  color: black;
  height: 525px;
  border-radius: 20px;
  background-color: rgb(194, 194, 194);
  width: 50%;

  & .DRL-container {
    display: flex;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    border-radius: 20px;
    width: 75%;
    background-color: rgb(149, 149, 149);
  }
  & .pokeimagecontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
    border-radius: 15px;
    height: 55%;
    width: 60%;
  }
  & img {
  }
`;

// export const DisplayRouteDex = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: green;
//   height: 500px;
//   overflow: auto;
//   width: 50%;
//   & .pokeimage {
//     height: 50%;
//   }
// `;

export const RouteList = styled.div`
  width: 50%;
  border: 2px solid black;
  border-radius: 100px;
  margin: 3px;
  background-color: ${(props) => `rgb(${getColor(props?.$color)})`};
  transition: 0.2s;
  &:hover {
    background-color: rgba(245, 48, 48, 0.2);
  }
`;
export const PokedexList = styled.div`
  width: 50%;
  border: 2px solid black;
  border-radius: 100px;
  margin: 3px;
  background-color: ${(props) => `rgb(${getColor(props?.$color)})`};
  transition: 0.2s;

  &:hover {
    background-color: rgba(245, 48, 48, 0.2);
  }
`;

export const RouteDexPokeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45%;
  width: 50%;
  overflow: auto;
`;

export const CustomPokeCard = styled(Card)`
  &.MuiCard-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    align-content: center;
    width: 280px;
    height: 280px;
    border-radius: 15px;
    border: 6px solid black;
    background-color: ${(props) => props.$color};
  }

  & .MuiCardHeader-title {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    font-size: 18px;
    margin: 5px;
    background-color: rgb(77, 77, 77);
    color: white;
    border-radius: 20px;
    width: 75%;
    height: 30px;
    text-transform: uppercase;
    font-weight: 700;
  }
  & .MuiCardHeader-subheader {
    display: flex;
    justify-content: center;
  }
  & .MuiCardContent-root {
    display: flex;
    justify-content: space-between;
    align-self: center;
    border: 2px solid black;
    margin-bottom: 10px;
    height: 60%;
    width: 95%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    flex-direction: row;
    flex-wrap: nowrap;
  }
  & .MuiCardContent-root > .MuiCardMedia-root {
    width: 35%;
    overflow: visible;
    display: flex;
  }
  & .MuiCardContent-root > .MuiTypography-root {
    margin-right: -10px;
    display: flex;
    font-size: 12px;
    width: 65%;
    height: 100%;
    align-content: center;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-self: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  align-items: center;
  width: ${(props) => props?.$width};
  border: 1px solid black;
  background-color: rgb(215, 215, 215);
  border-radius: 20px;
  margin: 5px;
  padding: 10px 5px;
  font-size: 18px;
`;

export const CustomButton = styled(Button)`
  &.MuiButton-root {
    background-color: rgb(240, 239, 255);
    margin: 2px 0px 2px 0px;
    border: 1px solid black;
    border-radius: 20px;
    width: ${(props) => props?.$width};
  }
`;

// background-color: ${(props) => `rgb(${getColor(props?.$color)})`};
