import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SupplyProvider } from "./components/Context/Context";
import { AuthProvider } from "./components/Context/auth-context";


makeServer();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <AuthProvider>
        <SupplyProvider >
          <App />
        </SupplyProvider>
    </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
