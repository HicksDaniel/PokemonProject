import { useState, useContext } from "react";
import RegionalSimplePokeDex from "./Regional-Pokedex/RegionalSimplePokedex";
import OutputData from "./Regional-DataTables/OutputData";
import LocationData from "./Regional-Routedex/LocationDataset";
import { RegionContext } from "../../store/RegionContext";
import { CustomButton } from "./Regional-Routedex/routedexstyles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { ButtonContainer } from "./Regional-Routedex/routedexstyles";
import MapIcon from "@mui/icons-material/Map";
import BookIcon from "@mui/icons-material/Book";

export default function RegionalInformationDisplay() {
  const { region } = useContext(RegionContext);
  const [infoPanel, setInfoPanel] = useState(null);

  const InfoButtonList = [
    { title: "Route Guide", display: <LocationData />, icon: <MapIcon /> },
    {
      title: "Regional Information",
      display: <OutputData />,
      icon: <LocationCityIcon />,
    },
    {
      title: "Regional Pokemon",
      display: <RegionalSimplePokeDex />,
      icon: <BookIcon />,
    },
  ];

  const handleClick = (value) => {
    setInfoPanel(value);
  };

  const renderedButtons = InfoButtonList.map((btn, index) => {
    return (
      <CustomButton
        key={index}
        endIcon={btn.icon}
        $size="30%"
        onClick={() => handleClick(btn.display)}
      >
        {btn.title}
      </CustomButton>
    );
  });

  return (
    <div style={{ backgroundColor: "rgba(70,70,70,0.2)" }}>
      <ButtonContainer $size="65%">{renderedButtons}</ButtonContainer>

      {infoPanel}
    </div>
  );
}
