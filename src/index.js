import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
<<<<<<< HEAD
// axios.defaults.baseURL = "http://localhost:5000";
=======
axios.defaults.baseURL = "https://movieapp-c859.onrender.com";
>>>>>>> b519cd30b4df6d1cee3caa567eeee1beb8a191d7
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
