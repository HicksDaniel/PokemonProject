import React, { useState, useContext } from "react";

import { RegionDataContext } from "../../../store/RegionDataContext";
import generateSimplePokeCard from "../../../components/common/GenerateSimplePokeCard";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { CustomRouteDisplay, CustomRouteTabs } from "../RegionPageStyles";

import { RegionContext } from "../../../store/RegionContext";

function TabPanel(props) {
  const { value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography></Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function RouteViewer({ routes }) {
  const [value, setValue] = React.useState(0);
  const { regionalDataset } = useContext(RegionDataContext);
  const { region } = useContext(RegionContext);

  const [onBtn, setOnBtn] = useState("");
  const [onBtn2, setOnBtn2] = useState("");
  const [routeDex, setRouteDex] = useState([]);
  const [dexCard, setDexCard] = useState("");

  const handleLocalDex = async (localRoute) => {
    const res = await fetch(localRoute);
    const data = await res.json();
    if (!data) return;
    const res2 = await fetch(data.areas[0].url);
    const data2 = await res2.json();
    if (!data2) return;

    setRouteDex(data2.pokemon_encounters);
    console.log(routeDex);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const populateDexcard = async (pokemon) => {
    const reqPokemon = regionalDataset[region].pokedex.filter(
      (n) => n.name === pokemon
    );
    setDexCard(generateSimplePokeCard(reqPokemon[0]));
  };

  return (
    <>
      <CustomRouteDisplay>
        <CustomRouteTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          $size="25%"
        >
          {routes.map((route, i) => (
            <Tab
              label={route.name}
              {...a11yProps(i)}
              key={`${i}-${route?.name}`}
              onClick={() => {
                setOnBtn2(route?.name);
                handleLocalDex(route.url);
              }}
            >
              {route?.name.toUpperCase()}
            </Tab>
          ))}
        </CustomRouteTabs>

        {routes.map((route, i) => (
          <TabPanel key={route?.name + i} value={i + 1} index={i}>
            {route?.name.toUpperCase()}
          </TabPanel>
        ))}

        <CustomRouteTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          $size="25%"
        >
          {routeDex.map((pokemon, i) => (
            <Tab
              label={pokemon?.pokemon?.name}
              {...a11yProps(i)}
              key={`${i}-${pokemon?.pokemon?.name}`}
              onClick={() => {
                setOnBtn(pokemon?.pokemon?.name);
                populateDexcard(pokemon?.pokemon?.name, i);
              }}
            >
              {pokemon?.pokemon?.name.toUpperCase()}
            </Tab>
          ))}
        </CustomRouteTabs>

        {routes.map((route, i) => (
          <TabPanel key={route?.name + i} value={i + 1} index={i}>
            {route?.name.toUpperCase()}
          </TabPanel>
        ))}

        <div
          style={{
            display: "flex",
            width: "60%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="pokeimagecontainer"
        >
          {dexCard}
        </div>
      </CustomRouteDisplay>

      {/* // <RouteDexNav className="RouteDexNav">
    //   <RoutesDisplayContainers className="RoutesDisplayContainers">
    //     <div className="DRL-container">
    //       <h3>A list of all Routes in {region}</h3>
    //       {routes.map((route, i) => (
    //         <RouteList
    //           className="routeslist"
    //           key={`${i}-${route?.name}`}
    //           onClick={() => {
    //             setOnBtn2(route?.name);
    //             handleLocalDex(route.url);
    //           }}
    //           $color={onBtn2 === route?.name}
    //         >
    //           {route?.name.toUpperCase()}
    //         </RouteList>
    //       ))}
    //     </div>
    //   </RoutesDisplayContainers> */}
    </>
  );
}
