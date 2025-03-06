import { useTheme } from "@mui/material";
import Layout from "./Layout";

import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="app-container">
      <Layout />
    </div>
  );
}
export default App;
