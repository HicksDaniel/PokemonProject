import RegionLookup from "./RegionLookup";
import RegionButton from "./RegionButton";
import "./regionpage.css";

import RegionalInformation from "../RegionalInformation";
import { RegionDataProvider } from "../../../store/RegionDataContext";

export default function RegionPage() {
  return (
    <>
      <RegionDataProvider>
        <RegionButton />
        <RegionLookup />
        <RegionalInformation />
      </RegionDataProvider>
    </>
  );
}
