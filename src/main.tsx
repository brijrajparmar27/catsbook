import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FeedProvider } from "./Context/FeedContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <FeedProvider>
      <App />
    </FeedProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
