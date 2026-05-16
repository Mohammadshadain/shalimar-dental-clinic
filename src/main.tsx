import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";

import App from "./App";
// @ts-ignore: CSS module declaration missing for side-effect import
import "./index.css";

ReactGA.initialize("G-06Y0DS8J4H");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);