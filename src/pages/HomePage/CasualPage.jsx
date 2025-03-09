import React, { useState } from "react";
import "./casualpage.css";
import { Card } from "@mui/material";

import IndexCards from "../cards/IndexCard";

import { CardDisplayContainer, IndexCardsContainer } from "./HomePageStyles";

import { NewsArticles } from "./mocknews/NewsArticles";

const na = NewsArticles;

const competitivenews = NewsArticles[0].competitiveNews;
const upcomingtitles = NewsArticles[1].upcomingtitles;
const beginnersguide = NewsArticles[2].beginnersguide;

function CasualPage() {
  return (
    <>
      <div className="casualpage-container">
        <div className="title-container">
          <h1 className="title">Welcome to the World of Pokemon</h1>
        </div>

        <CardDisplayContainer className="TEST">
          <IndexCards article={competitivenews} size="wide" />
          <IndexCardsContainer>
            <IndexCards article={upcomingtitles} size="small" />
            <IndexCards article={beginnersguide} size="small" />
          </IndexCardsContainer>
          <IndexCardsContainer>
            <IndexCards article={competitivenews} size="small" />
            <IndexCards article={beginnersguide} size="small" />
          </IndexCardsContainer>
          <IndexCards article={upcomingtitles} size="large" />
          <IndexCards article={upcomingtitles} size="wide" />
        </CardDisplayContainer>
      </div>
    </>
  );
}

export default CasualPage;
