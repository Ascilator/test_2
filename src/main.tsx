import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CardsContextProvider } from "./context/cardsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardsContextProvider>
      <App />
    </CardsContextProvider>
  </React.StrictMode>
);
