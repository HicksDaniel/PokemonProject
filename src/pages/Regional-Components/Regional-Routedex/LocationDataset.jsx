import { useState, useEffect, useContext } from "react";
import { RegionContext } from "../../../store/RegionContext";
import { RegionDataContext } from "../../../store/RegionDataContext";
import RouteViewer from "./RouteViewer";
import LocalNavigation from "./LocalNavigation";
import OtherLocationViewer from "./OtherLocationViewer";
import { CustomButton } from "./routedexstyles";

import { ButtonContainer } from "./routedexstyles";

export const removeRegionalStrings = {
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

export default function LocationData() {
  const [visibleComponent, setVisibleComponent] = useState();
  const [onBtn, setOnBtn] = useState("");

  const [routes, setRoutes] = useState([]);
  const [cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);
  const [others, setOthers] = useState([]);

  const { region } = useContext(RegionContext);
  const { regionalDataset } = useContext(RegionDataContext);

  useEffect(() => {
    const currentRegion = regionalDataset[region].locations;
    const cleanupIncomingLocationData = async () => {
      setCities(currentRegion.cities);
      setRoutes(currentRegion.routes);
      setTowns(currentRegion.towns);
      setOthers(currentRegion.other);
    };

    cleanupIncomingLocationData();
  }, [region]);

  return (
    <>
      <ButtonContainer $width="55%">
        <CustomButton
          $width="25%"
          onClick={() => {
            setOnBtn("Routes");
            setVisibleComponent(<RouteViewer routes={routes} />);
          }}
          $color={onBtn === "Routes"}
        >
          Routes
        </CustomButton>
        <CustomButton
          $width="25%"
          onClick={() => {
            setOnBtn("Towns and Cities");
            setVisibleComponent(
              <LocalNavigation cities={cities} towns={towns} />
            );
          }}
          $color={onBtn === "Towns and Cities"}
        >
          Towns and Cities
        </CustomButton>
        <CustomButton
          $width="25%"
          onClick={() => {
            setOnBtn("Other Locations");
            setVisibleComponent(<OtherLocationViewer others={others} />);
          }}
          $color={onBtn === "Other Locations"}
        >
          Other Locations
        </CustomButton>
      </ButtonContainer>

      {visibleComponent}
    </>
  );
}
