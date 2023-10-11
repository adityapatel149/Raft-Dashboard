import { createRoot } from "react-dom/client";
import { StyleProvider } from "@ant-design/cssinjs";

import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
  <StyleProvider hashPriority="low">
    <App />
  </StyleProvider>,
);
