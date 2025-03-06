import React, { useContext, useRef } from "react";
import { RegionContext } from "../../../store/RegionContext";
import { RegionDataContext } from "../../../store/RegionDataContext";
import generateSimplePokeCard from "../../../components/common/GenerateSimplePokeCard.jsx";
import { Skeleton } from "@mui/material";

import "./simplepokedex.css";

export default function SimplePokeDex({ property }) {
  const { region } = useContext(RegionContext);
  const { regionalDataset } = useContext(RegionDataContext);

  const currentRegion = regionalDataset[region];

  const renderedPokedex = currentRegion.pokedex.map((p, i) => {
    return generateSimplePokeCard(p, i);
  });

  return (
    <div key={Math.random()} className="container">
      <div
        className="pokedex-header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5%",
          fontSize: "24px",
        }}
      >
        All Pokemon unique to the {region} region.
      </div>
      <div className="pokedex-container">{renderedPokedex}</div>
    </div>
  );
}
