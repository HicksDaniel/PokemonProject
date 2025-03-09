import { useContext } from "react";
import { RegionContext } from "../../../store/RegionContext";

import {
  RegionDisplayContainer,
  RegionDisplayTitle,
  RegionDisplayDescription,
  RegionImage,
  RegionImgBorder,
  RegionImgContainer,
} from "../RegionPageStyles";

const RegionLookup = () => {
  const { region, url, regionDescription } = useContext(RegionContext);

  return (
    <RegionDisplayContainer>
      <RegionDisplayTitle>Regional Map of {region}</RegionDisplayTitle>
      <RegionImgContainer>
        <RegionImgBorder>
          <RegionImage src={url} alt="Image Cannot Be Found" />
        </RegionImgBorder>
        <RegionDisplayDescription>{regionDescription}</RegionDisplayDescription>
      </RegionImgContainer>
    </RegionDisplayContainer>
  );
};

export default RegionLookup;
