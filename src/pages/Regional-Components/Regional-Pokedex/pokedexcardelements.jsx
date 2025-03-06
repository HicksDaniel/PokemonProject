import { PokemonTypeBubbles } from "../RegionPageStyles";

const typeIcons = {};

const typeColorTheme = {
  bug: "rgba(0, 218, 33, 1)",
  dark: "rgba(2, 0, 30, 1)",
  dragon: "rgb(0, 76, 157)",
  electric: "rgba(237, 229, 0, 1)",
  fairy: "rgba(255, 156, 156, 1)",
  fire: "rgba(209, 0, 0, 1)",
  fighting: "rgba(193, 74, 0, 1)",
  flying: "rgba(164, 210, 255, 1)",
  ghost: "rgba(127, 77, 141, 1)",
  grass: "rgba(0, 146, 22, 1)",
  ground: "rgba(92, 44, 0, 1)",
  ice: "rgba(0, 221, 255, 1)",
  normal: "rgba(184, 184, 184, 1)",
  poison: "rgba(144, 0, 184, 1)",
  psychic: "rgba(192, 0, 245, 1)",
  rock: "rgba(127, 120, 109, 1)",
  steel: "rgba(72, 72, 72, 1)",
  water: "rgba(0, 64, 184, 1)",
};
const backgroundColorTheme = {
  bug: "rgba(0, 218, 33, .2)",
  dark: "rgba(2, 0, 30, .2)",
  dragon: "rgba(0, 76, 15, .2)",
  electric: "rgba(237, 229, 0, .2)",
  fairy: "rgba(255, 156, 156, .2)",
  fire: "rgba(209, 0, 0, .2)",
  fighting: "rgba(193, 74, 0, .2)",
  flying: "rgba(164, 210, 255, .2)",
  ghost: "rgba(127, 77, 141, .2)",
  grass: "rgba(0, 146, 22, .2)",
  ground: "rgba(92, 44, 0, .2)",
  ice: "rgba(0, 221, 255, .2)",
  normal: "rgba(184, 184, 184, .2)",
  poison: "rgba(144, 0, 184, .2)",
  psychic: "rgba(192, 0, 245, .2)",
  rock: "rgba(127, 120, 109, .2)",
  steel: "rgba(72, 72, 72, .2)",
  water: "rgba(0, 64, 184, .2)",
};

export function GenerateTypeBubble(type, i) {
  return (
    <PokemonTypeBubbles
      $gradient={`linear-gradient(110deg, #444, rgba(68, 68, 68, .8) 25%, #000 25%, #000, 26%, ${typeColorTheme[type]} -50%, #ddd 125%)`}
    >
      <div>{type}</div>
    </PokemonTypeBubbles>
  );
}
export function GenerateBackgroundColor(type, i) {
  return backgroundColorTheme[type];
}

export function GeneratePokemonDescription(text, i) {
  const cleanText = text.replace(String.fromCharCode(12), " ");
  return cleanText;
}

// background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
