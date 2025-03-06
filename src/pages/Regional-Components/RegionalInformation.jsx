import { useState, useContext } from "react";
import SimplePokeDex from "./Regional-Pokedex/SimplePokeDex";
import OutputData from "./Regional-DataTables/OutputData";
import LocationData from "./Regional-Routedex/LocationDataset";
import { RegionContext } from "../../store/RegionContext";
import { CustomButton } from "./Regional-Routedex/routedexstyles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { ButtonContainer } from "./Regional-Routedex/routedexstyles";
import MapIcon from "@mui/icons-material/Map";
import BookIcon from "@mui/icons-material/Book";

export default function RegionalInformation() {
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
      display: <SimplePokeDex />,
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
        $width="30%"
        onClick={() => handleClick(btn.display)}
      >
        {btn.title}
      </CustomButton>
    );
  });

  return (
    <div style={{ backgroundColor: "rgba(70,70,70,0.2)" }}>
      <ButtonContainer $width="65%">{renderedButtons}</ButtonContainer>

      {infoPanel}
    </div>
  );
}
