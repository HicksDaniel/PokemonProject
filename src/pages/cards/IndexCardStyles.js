// This is just a test style sheet... Lets see how this goes you fucking moron!!!

import { LineStyleRounded } from "@mui/icons-material";
import styled from "styled-components";

const sizeChart = {
  small: {
    height: "190px",
    width: "190px",
  },
  large: {
    height: "400px",
    width: "400px",
  },
  wide: {
    height: "200px",
    width: "400px",
  },
};

const getColor = (type) => {
  if (type === "primary") return "rgb(113, 113, 113)";
  return "white";
};

export const CardWrapper = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  flex-flow: column nowrap;
  border-radius: 10px;
  border: 2px solid black;
  height: ${(props) => sizeChart[props.$size].height};
  width: ${(props) => sizeChart[props.$size].width};
  background: ${(props) => props.$color};
`;

export const SmallCard = styled.div`
  align-items: center;
  width: inherit;
  height: inherit;
  overflow: hidden;
  padding: 0px;
  margin: 0px;

  & .title {
    display: flex;
    justify-self: center;
    align-items: center;
    color: rgba(30, 30, 30, 1);
    line-height: 15px;
    background-color: rgba(0, 0, 0, 0.2);
    align-items: center;
    font-size: 16px;
    height: 16%;
    width: 90%;
    text-transform: capitalize;
    margin: 5px;

    border-radius: 10px;
  }

  & .content {
    height: 80%;
    padding-bottom: 5px;
  }

  & .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 0px;
    width: 100%;
    height: 100%;

    & img {
      display: flex;

      max-height: 100%;
      max-width: 100%;
      border: 2px solid black;
      border-radius: 5px;
    }
  }
`;

export const WideCard = styled.div`
  position: absolute;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  width: inherit;
  height: inherit;
  overflow: hidden;

  & .title {
    position: relative;
    display: flex;
    justify-self: center;
    background-color: rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: rgba(30, 30, 30, 1);
    height: 20%;
    width: 80%;
    text-transform: capitalize;
    margin: 5px;
    padding: 0px;
    border-radius: 10px;
  }

  & .subtitle {
    position: relative;
    display: flex;
    justify-content: center;
    width: 50%;
    height: 15%;
    border-radius: 8px;
    align-items: center;
    background-color: rgb(111, 111, 111);
    font-size: 14px;
    border: 1px solid black;
    margin-left: 10px;
  }

  & .content {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    margin: 0px;
    padding-right: 10px;
    padding-left: 5px;
    font-size: 12px;
  }

  & .textbody {
    padding: 4px;
    width: 55%;
  }
  & .image {
    display: flex;
    transform: translate(0px, -20px);
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 120%;
    border-radius: 5px;
    padding: 2px;
    & img {
      display: flex;
      max-width: 100%;
      max-height: 100%;
      border: 2px solid black;
      border-radius: 5px;
    }
  }
`;

export const LargeCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0px;
  padding: 0px;
  width: inherit;
  height: inherit;
  overflow: hidden;

  & .title {
    display: flex;
    justify-self: center;
    color: rgba(30, 30, 30, 1);
    background-color: rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 15%;
    width: 80%;
    text-transform: capitalize;
    margin: 5px;
    padding: 0px;
    border-radius: 10px;
  }

  & .subtitle {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 10%;
    border-radius: 8px;
    align-items: center;
    background-color: rgb(111, 111, 111);
    font-size: 14px;
    border: 1px solid black;
    margin-left: 20px;
  }

  & .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75%;

    margin: 0px;
    padding: 10px;
    font-size: 12px;
  }

  & .textbody {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 4px;
    width: 45%;
  }
  & .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 100%;
    border-radius: 5px;
    padding: 2px;
    & img {
      display: flex;
      width: 100%;
      border: 2px solid black;
      border-radius: 5px;
    }
  }
`;
