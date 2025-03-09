import React, { useState } from "react";
import { WideCard, LargeCard, SmallCard, CardWrapper } from "./IndexCardStyles";

export default function IndexCards({
  article: { title, subtitle, color, image, textbody, newsLink },
  size,
}) {
  const isLargeOrWideWithText =
    (size === "wide" || size === "large") && textbody;

  const removeSubtitleIfSmall = size !== "small" && subtitle;

  const RenderCardContents = () => {
    return (
      <>
        <div className="title">{title}</div>

        {removeSubtitleIfSmall && <div className="subtitle">{subtitle}</div>}

        <div className="content">
          {isLargeOrWideWithText && (
            <div className="textbody">
              <p>{textbody}</p>
            </div>
          )}

          {image && (
            <div className="image">
              <img src={image} />
            </div>
          )}
        </div>
      </>
    );
  };

  const renderedIndexCard = (
    <CardWrapper $size={size} $color={color}>
      {size === "small" ? (
        <SmallCard>{RenderCardContents()}</SmallCard>
      ) : size === "wide" ? (
        <WideCard>{RenderCardContents()}</WideCard>
      ) : (
        <LargeCard>{RenderCardContents()}</LargeCard>
      )}
    </CardWrapper>
  );

  return <div>{renderedIndexCard}</div>;
}
