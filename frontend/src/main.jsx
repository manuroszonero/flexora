import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./i18n";

import { AssessmentProvider } from "./context/AssessmentContext";
import { ResultProvider } from "./context/ResultContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssessmentProvider>
      <ResultProvider>
        <App />
      </ResultProvider>
    </AssessmentProvider>
  </React.StrictMode>
);