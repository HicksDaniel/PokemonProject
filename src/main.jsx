import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router";
import { router } from "./Routes.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { RegionProvider } from "./store/RegionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegionProvider>
      <RouterProvider router={router} />
    </RegionProvider>
  </StrictMode>
);
