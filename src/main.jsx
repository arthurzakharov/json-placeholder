import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";
import "./styles/reset.css";

createRoot(document.getElementById("root")).render(<App />);
