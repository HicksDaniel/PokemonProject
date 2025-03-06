export async function getPokemonByRegion(dexRegion) {
  // console.log({ dexRegion });
  try {
    const { results } = await fetchPokemonByRegion(dexRegion);

    const promiseArray = results.map((res) => fetch(res.url));

    return Promise.all(promiseArray)
      .then((responses) => {
        return Promise.all(
          responses.map(async (response) => {
            const pData = await response.json();
            const res2 = await fetch(pData.species.url);
            const pokemonDesc = await res2.json();
            // console.log({ ...pData });

            return {
              id: pData.id,
              name: pData.name,
              abilities: pData.abilities,
              cries: pData.cries.latest,
              pokemonType: pData.types,
              imageDefault: pData.sprites.front_default,
              // imageDefault: pData.sprites.other.home.front_default,
              imageShiny: pData.sprites.other.home.front_shiny,
              gifDefault: pData.sprites.other.showdown.front_default,
              gifShiny: pData.sprites.other.showdown.front_shiny,
              desc: pokemonDesc.flavor_text_entries[0].flavor_text,
              pokeColor: pokemonDesc.color.name,
              eggGroups: pokemonDesc.egg_groups,
              stats: pData.stats,
            };
          })
        );
      })
      .then((data) => {
        // console.log(data);
        return data;
      });
  } catch (e) {
    console.warn(e);
    throw e;
  }
}

async function fetchPokemonByRegion(regionURL) {
  const url = regionURL;
  const res = await fetch(url);
  const pokemon = await res.json();
  return Promise.resolve(pokemon);
}
