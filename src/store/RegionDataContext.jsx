import { createContext, useState, useContext, useEffect } from "react";
import { RegionContext } from "./RegionContext";
import { getPokemonByRegion } from "./utils/GetPokemonByRegion";

const removeRegionalStrings = {
  kanto: "",
  johto: "",
  hoenn: "",
  sinnoh: "",
  unova: "",
  kalos: "",
  alola: "",
  galar: "",
  hisui: "",
  paldea: "",
};

const REGIONALDATASET_DEFAULT_STATE = {
  Kanto: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Johto: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Hoenn: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Sinnoh: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Unova: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Kalos: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Alola: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Galar: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Hisui: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
  Paldea: {
    pokedex: [],
    dataset: [],
    locations: {
      routes: [],
      cities: [],
      towns: [],
      other: [],
    },
  },
};

const RegionDataContext = createContext({ REGIONALDATASET_DEFAULT_STATE });

const RegionDataProvider = ({ children }) => {
  const { dexUrl, varDexUrl, region, regionUrl } = useContext(RegionContext);
  // const [visiblePokedex, setVisiblePokedex] = useState(
  //   REGIONALDATASET_DEFAULT_STATE
  // );
  const [regionalDataset, setRegionalDataset] = useState(
    REGIONALDATASET_DEFAULT_STATE
  );

  useEffect(() => {
    const fetchResults = [];
    const pokedex = regionalDataset[region]?.pokedex || [];

    const isPokedexPopulated = pokedex.length === 0;
    console.log(region, pokedex.length === 0);
    if (!isPokedexPopulated) return;
    console.log("I ran");

    const populateRegionalDataset = async () => {
      const hasDexUrl = dexUrl !== null;
      const hasVarDexUrl = varDexUrl !== null;

      const res = await fetch(regionUrl);
      const data = await res.json();
      // const res2 = await fetch(data.pokedexes[0].url);
      // const data2 = await res2.json();

      const locationArray = data?.locations
        .map((route) => ({
          ...route,
          name: route.name
            .replace(
              /kanto|johto|hoenn|sinnoh|unova|kalos|alola|galar|hisui|paldea/gi,
              function (matched) {
                return removeRegionalStrings[matched];
              }
            )
            .replace(/[-]+/g, " ")
            .trim(),
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      const routeList = locationArray
        .filter((location) => location?.name.includes("route"))
        .map((route) => ({ ...route }))
        .sort(
          (a, b) =>
            a?.name.replace(/[^0-9.]+/g, "") - b?.name.replace(/[^0-9.]+/g, "")
        );

      const cityList = locationArray.filter((location) =>
        location?.name.includes("city")
      );

      const townList = locationArray.filter(
        (location) =>
          location?.name.includes("town") ||
          location?.name.includes("cinnabar island")
      );

      // This is nasty I relaly don't like using multiple && to filter this array down.
      // How can I look at an array with multiple options that can be added an removed.
      const otherLocations = locationArray.filter(
        (location) =>
          !location?.name.includes("route") &&
          !location?.name.includes("city") &&
          !location?.name.includes("town")
      );

      if (hasDexUrl) {
        let data = dexUrl;
        await getPokemonByRegion(data).then((result) => {
          result.map((p) => {
            fetchResults.push(p);
          });
        });
      }

      if (hasVarDexUrl) {
        let data = varDexUrl;
        await getPokemonByRegion(data).then((result) => {
          result.map((p) => {
            fetchResults.push(p);
          });
        });
      }

      setRegionalDataset({
        ...regionalDataset,
        [region]: {
          ...regionalDataset[region],
          locations: {
            ...[region].locations,
            routes: routeList,
            cities: cityList,
            towns: townList,
            other: otherLocations,
          },
          pokedex: fetchResults,
          dataset: {},
        },
      });
    };

    // console.log(regionalDataset);
    populateRegionalDataset();
  }, [region]);

  //   const updateRegionData = (region) => {
  //     setRegionalPokedex(regions[region].regionalPokeDex);
  //   };

  return (
    <RegionDataContext.Provider
      value={{
        regionalDataset,
      }}
    >
      {children}
    </RegionDataContext.Provider>
  );
};

export { RegionDataContext, RegionDataProvider };
