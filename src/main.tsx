import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Info from "./Info.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Info />
  </StrictMode>,
);
