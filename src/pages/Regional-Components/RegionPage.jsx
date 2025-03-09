import RegionLookup from "./Region-Nav/RegionLookup";
import RegionButton from "./Region-Nav/RegionButton";

import RegionalInformationDisplay from "./RegionalInformationDisplay";
import { RegionDataProvider } from "../../store/RegionDataContext";

export default function RegionPage() {
  return (
    <>
      <RegionDataProvider>
        <RegionButton />
        <RegionLookup />
        <RegionalInformationDisplay />
      </RegionDataProvider>
    </>
  );
}
