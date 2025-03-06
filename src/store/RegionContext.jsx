import { createContext, useState, useEffect } from "react";

const regions = {
  kanto: {
    region: "Kanto",
    regionUrl: "https://pokeapi.co/api/v2/region/kanto",
    url: "https://archives.bulbagarden.net/media/upload/thumb/7/7d/PE_Kanto_Map.png/2560px-PE_Kanto_Map.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=151",
    varDexUrl: null,
    description: "Hello There! Welcome to the world of POKEMON.",
    regionalPokedex: [],
  },
  johto: {
    region: "Johto",
    regionUrl: "https://pokeapi.co/api/v2/region/johto",
    url: "https://archives.bulbagarden.net/media/upload/6/64/JohtoMap.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151",
    varDexUrl: null,
    description: "A whole new adventure Awaits!",
    regionalPokedex: [],
  },
  hoenn: {
    region: "Hoenn",
    regionUrl: "https://pokeapi.co/api/v2/region/hoenn",
    url: "https://archives.bulbagarden.net/media/upload/8/85/Hoenn_ORAS.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251",
    varDexUrl: null,
    description: "A whole new adventure Awaits... Again!",
    regionalPokedex: [],
  },
  sinnoh: {
    region: "Sinnoh",
    regionUrl: "https://pokeapi.co/api/v2/region/sinnoh",
    url: "https://archives.bulbagarden.net/media/upload/0/08/Sinnoh_BDSP_artwork.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=107&offset=386",
    varDexUrl: null,
    description: "A whole new adventure Awaits... Again....Again!",
    regionalPokedex: [],
  },
  unova: {
    region: "Unova",
    regionUrl: "https://pokeapi.co/api/v2/region/unova",
    url: "https://archives.bulbagarden.net/media/upload/f/fc/Unova_B2W2_alt.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=156&offset=493",
    varDexUrl: null,
    description: "A whole new adventure Awaits... Again....Again!",
    regionalPokedex: [],
  },
  kalos: {
    region: "Kalos",
    regionUrl: "https://pokeapi.co/api/v2/region/kalos",
    url: "https://archives.bulbagarden.net/media/upload/8/8a/Kalos_alt.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=72&offset=649",
    varDexUrl: null,
    description: "A whole new adventure Awaits... Again....Again!",
    regionalPokedex: [],
  },
  alola: {
    region: "Alola",
    regionUrl: "https://pokeapi.co/api/v2/region/alola",
    url: "https://archives.bulbagarden.net/media/upload/0/0b/Alola_USUM_artwork.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=88&offset=721",
    varDexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=16&offset=1124",
    description: "A whole new adventure Awaits... Again....Again!",
    regionalPokedex: [],
  },
  galar: {
    region: "Galar",
    regionUrl: "https://pokeapi.co/api/v2/region/galar",
    url: "https://archives.bulbagarden.net/media/upload/c/ce/Galar_artwork.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=96&offset=809",
    varDexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=1185",
    description: "A whole new adventure Awaits... Again....Again!",
    regionalPokedex: [],
  },
  hisui: {
    region: "Hisui",
    regionUrl: "https://pokeapi.co/api/v2/region/hisui",
    url: "https://archives.bulbagarden.net/media/upload/2/22/Legends_Arceus_Hisui.png",
    dexUrl: null,
    varDexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=18&offset=1253",
    description: "A whole new adventure Awaits... Again....Again!",
    regionalPokedex: [],
  },
  paldea: {
    region: "Paldea",
    regionUrl: "https://pokeapi.co/api/v2/region/paldea",
    url: "https://archives.bulbagarden.net/media/upload/f/fd/Paldea_artwork.png",
    dexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=120&offset=905",
    varDexUrl: "https://pokeapi.co/api/v2/pokemon/?limit=4&offset=1274",
    description: "A whole new adventure Awaits... Again....Again!",
    regionalPokedex: [],
  },
};

const RegionContext = createContext({ regions });

const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState(regions.kanto.region);
  const [url, setUrl] = useState(regions.kanto.url);
  const [dexUrl, setDexUrl] = useState(regions.kanto.dexUrl);
  const [varDexUrl, setVarDexUrl] = useState(regions.kanto.varDexUrl);
  const [regionUrl, setRegionUrl] = useState(regions.kanto.regionUrl);
  const [regionDescription, setRegionDescription] = useState(
    regions.kanto.description
  );

  const updateRegion = (region) => {
    setUrl(regions[region].url);
    setDexUrl(regions[region].dexUrl);
    setVarDexUrl(regions[region].varDexUrl);
    setRegion(regions[region].region);
    setRegionUrl(regions[region].regionUrl);
    setRegionDescription(regions[region].description);
    // setRegionalPokedex(currentDex);
  };

  return (
    <RegionContext.Provider
      value={{
        region,
        regionUrl,
        url,
        dexUrl,
        varDexUrl,
        updateRegion,
        regionDescription,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export { RegionContext, RegionProvider };
