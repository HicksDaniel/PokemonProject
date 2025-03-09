import styled from "styled-components";

export const CardDisplayContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding-top: 10px;
  border-radius: 10px;
  align-content: space-evenly;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.4);
  height: 650px;
  width: 75%;
`;

export const IndexCardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  place-content: space-between;
`;
