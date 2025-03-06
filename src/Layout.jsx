import MiniDrawer from "./components/sidebar/UpdatedSideNav";

import "./Layout.css";

import { useTheme } from "@mui/material";

import "./App.css";
import { Outlet } from "react-router";

function Layout() {
  const Theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MiniDrawer>
        <div className="outlet-container">
          <Outlet />
        </div>
      </MiniDrawer>
    </div>
  );
}

export default Layout;
