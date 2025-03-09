import { useContext } from "react";
import { RegionContext } from "../../../store/RegionContext.jsx";
import { RegionDataContext } from "../../../store/RegionDataContext.jsx";
import generateSimplePokeCard from "../../../components/common/GenerateSimplePokeCard.jsx";
import {
  RegionalPokedexContainer,
  RegionalPokedexHeader,
} from "../RegionPageStyles.js";

export default function RegionalSimplePokeDex() {
  const { region } = useContext(RegionContext);
  const { regionalDataset } = useContext(RegionDataContext);

  const currentRegion = regionalDataset[region];

  const renderedPokedex = currentRegion.pokedex.map((p, i) => {
    return generateSimplePokeCard(p, i);
  });

  return (
    <>
      <RegionalPokedexHeader>
        All Pokemon unique to the {region} region.
      </RegionalPokedexHeader>
      <RegionalPokedexContainer>{renderedPokedex}</RegionalPokedexContainer>
    </>
  );
}
