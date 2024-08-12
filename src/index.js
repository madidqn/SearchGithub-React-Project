import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppProvider from "./context/AppProvider";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AppProvider>
        <App />
        <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  </>
);
