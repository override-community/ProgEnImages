import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContextProvider } from "./context/AppContext.tsx";
import { LocaleProivder } from "./context/LocaleContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocaleProivder>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </LocaleProivder>
  </React.StrictMode>
);
