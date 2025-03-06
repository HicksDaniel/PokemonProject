// This is just a test style sheet... Lets see how this goes you fucking moron!!!

import styled from "styled-components";

const getColor = (type) => {
  if (type === "primary") return "rgb(245, 48, 48)";
  return "white";
};

export const CardWrapper = styled.div`
  padding: 10px;
  background: ${(props) => getColor(props.$color)};
`;

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
