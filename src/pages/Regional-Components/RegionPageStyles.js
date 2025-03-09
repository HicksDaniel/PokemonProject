import styled from "styled-components";
import { Box, Tabs } from "@mui/material";

export const RegionDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegionDisplayTitle = styled.div`
  margin: 5px;
  font-size: 24px;
  background-color: red;
  width: 60%;
  border-radius: 50px;
  font-weight: bold;
`;

export const RegionImage = styled.img`
  width: auto;
  height: 300px;
  border-radius: 10px;
  border: -5px solid rgb(0, 0, 0);
  transition: 2s;
`;

export const RegionImgBorder = styled.div`
  border: -5px solid hsl(51, 100%, 42%);
`;

export const RegionImgContainer = styled.div`
  & {
    display: flex;
    width: 100%;
    height: 350px;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    align-items: center;
    transition: 2s ease-in-out;
    overflow: auto;
  }
  &:active {
    margin-bottom: 5px;
    border-radius: 70px;
  }
  &:active > .imgborder {
    width: 70%;
    max-height: 50%;
    margin-bottom: 5px;
    border-radius: 70px;
    background-color: hsl(51, 100%, 42%);
    border: 20px solid hsl(51, 100%, 42%);
    transition: 2s ease-in-out;
  }
  &:active > .imgborder > .image {
    position: relative;
    width: 100%;
    border-radius: 70px;
    border: 10px solid rgb(0, 0, 0);
    transition: 2s ease-in-out;
  }
`;

export const RegionDisplayDescription = styled.div`
  width: 50%;
  border-radius: 20px;
  background-color: red;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const PokemonTypeBubbles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  margin: 2px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid black;
  background: ${(props) => props.$gradient};
  & div {
    transform: translateX(10px);
    text-transform: capitalize;
    color: rgb(52, 52, 52);
  }
`;

export const CustomRouteDisplay = styled(Box)`
  display: flex;
  width: 90%;
  height: 500px;
  justify-self: center;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const CustomRouteTabs = styled(Tabs)`
  border-right: 4;
  border-color: rgba(0, 0, 0, 0.12);
  width: ${(props) => props.$width};
`;

export const RegionalPokedexHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  font-size: 24px;
`;
export const RegionalPokedexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 15px 10px 10px;
  overflow: auto;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

// _________________________________________________________________

// REGION_LOOKUP

// .rlcontainer {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
//   .rltitle {
//     margin: 5px;
//     font-size: 24px;
//     background-color: red;
//     width: 60%;
//     border-radius: 50px;
//     font-weight: bold;
//   }

//   .rlimageborder {
//     width: 50%;
//     height: 25%;
//     border: -5px solid hsl(51, 100%, 42%);
//     transition: 2s ease-in-out;
//   }
//   .rlimage {
//     width: 100%;
//     height: 50%;
//     border-radius: 10px;
//     border: -5px solid rgb(0, 0, 0);
//     transition: 2s ease-in-out;
//   }
//   .rlimagecontainer {
//     display: flex;
//     height: 50;
//     flex-direction: column;
//     justify-content: space-evenly;
//     border-radius: 10px;
//     align-items: center;
//   }
//   .rlimagecontainer:active > .rlimageborder {
//     width: 80%;
//     max-height: 50%;
//     margin-bottom: 5px;
//     border-radius: 70px;
//     background-color: hsl(51, 100%, 42%);
//     border: 20px solid hsl(51, 100%, 42%);
//   }
//   .rlimagecontainer:active > .rlimageborder > .rlimage {
//     margin: -10px -25px -15px -25px;
//     width: 101%;
//     max-height: 50%;
//     position: inherit;
//     border-radius: 70px;
//     border: 10px solid rgb(0, 0, 0);
//   }

//   .rldescription {
//     width: 50%;
//     border-radius: 20px;
//     background-color: red;
//     font-size: 20px;
//     margin-bottom: 10px;
//   }

// <div className="rlcontainer">
// <div className="rltitle">Regional Map of {region}</div>
// <div className="rlimagecontainer">
//   <div className="rlimageborder">
//     <img className="rlimage" src={url} alt="" />
//   </div>
//   <div className="rldescription">{regionDescription}</div>
// </div>
// </div>

// _________________________________________________________________

// _____________________________________________________________________

// RegionButton

// .rbcontainer {
//     display: flex;

//     flex-direction: column;
//     justify-self: center;
//     align-self: center;
//     align-items: center;
//     width: 70%;
//     height: 15%;
//   }

//   .rbbuttons {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr;
//   }

//   .rbtitle {
//     font-size: 24px;
//     font-weight: bold;
//     background-color: red;
//     margin-bottom: 5px;
//     border-radius: 20px;
//     width: 75%;
//   }

// <div className="rbcontainer">
// <div className="rbtitle">Regions in the world of Pokemon</div>
// <div className="rbbuttons">
//   <RegionBtn value="Kanto" onClick={() => updateRegion("kanto")}>
//     Change to Kanto
//   </RegionBtn>
//   <RegionBtn value="Johto" onClick={() => updateRegion("johto")}>
//     Change to Johto
//   </RegionBtn>
//   <RegionBtn value="Hoenn" onClick={() => updateRegion("hoenn")}>
//     Change to Hoenn
//   </RegionBtn>
//   <RegionBtn value="Sinnoh" onClick={() => updateRegion("sinnoh")}>
//     Change to Sinnoh
//   </RegionBtn>
//   <RegionBtn value="Unova" onClick={() => updateRegion("unova")}>
//     Change to Unova
//   </RegionBtn>
//   <RegionBtn value="Kalos" onClick={() => updateRegion("kalos")}>
//     Change to Kalos
//   </RegionBtn>
//   <RegionBtn value="Alola" onClick={() => updateRegion("alola")}>
//     Change to Alola
//   </RegionBtn>
//   <RegionBtn value="Galar" onClick={() => updateRegion("galar")}>
//     Change to Galar
//   </RegionBtn>
//   <RegionBtn value="Hisui" onClick={() => updateRegion("hisui")}>
//     Change to Hisui
//   </RegionBtn>
//   <RegionBtn value="Paldea" onClick={() => updateRegion("paldea")}>
//     Change to Paldea
//   </RegionBtn>
// </div>
// </div>
// );
// };

// _____________________________________________________________________
