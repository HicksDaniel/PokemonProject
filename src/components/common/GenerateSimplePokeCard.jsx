import React, { Fragment } from "react";
import { CustomPokeCard } from "../../pages/Regional-Components/Regional-Routedex/routedexstyles";
import { CardHeader, CardMedia, Typography, CardContent } from "@mui/material";

import {
  GenerateTypeBubble,
  GenerateBackgroundColor,
  GeneratePokemonDescription,
} from "../../pages/Regional-Components/Regional-Pokedex/pokedexcardelements";

export default function generateSimplePokeCard(p, i) {
  return (
    <Fragment key={p.name + i}>
      <CustomPokeCard
        $color={GenerateBackgroundColor(p.pokemonType[0].type.name)}
      >
        <CardHeader
          title={p.name}
          subheader={p.pokemonType.map((res) => {
            return GenerateTypeBubble(res.type.name);
          })}
        />
        <CardContent>
          <CardMedia component="img" image={p.imageDefault} />
          <Typography>{GeneratePokemonDescription(p.desc)}</Typography>
        </CardContent>
      </CustomPokeCard>
    </Fragment>
  );
}

{
  /* <Card
  key={i + p.name}
  style={{
    backgroundColor: GenerateBackgroundColor(p.pokemonType[0].type.name),
  }}
  title={p.name.toUpperCase()}
  className="md:w-25rem"
  subTitle={p.pokemonType.map((res) => {
    return GenerateTypeBubble(res.type.name);
  })}
>
  {<img src={p.imageDefault} />}
  <p className="s-0">{GeneratePokemonDescription(p.desc)}</p>
</Card> */
}
