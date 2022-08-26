import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FoodDetailscontextProvider } from "./Context/FoodDetailscontext";
import {
  FavtItemsContext,
  FavtItemsContextProvider,
} from "./Context/FavtItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FoodDetailscontextProvider>
      <FavtItemsContextProvider>
        <App />
      </FavtItemsContextProvider>
    </FoodDetailscontextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
