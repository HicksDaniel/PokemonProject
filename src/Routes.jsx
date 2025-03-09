import { createBrowserRouter } from "react-router-dom";
import CasualPage from "./pages/HomePage/CasualPage";
import AboutPage from "./pages/AboutPage";
import RegionPage from "./pages/Regional-Components/RegionPage";
import LoginForm from "./forms/LoginForm";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/home",
        element: <CasualPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/regions",
        element: <RegionPage />,
      },
    ],
  },
]);
