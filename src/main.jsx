import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Router>
    <App />
    <script src="//cdnt.netcoresmartech.com/smartechclient.js"></script>{" "}
    <script>
      {" "}
      smartech('create', 'ADGMOT35CHFLVDHBJNIG50K96AM68RKF7EHOO2OHA1Q08TPD7LL0'
      ); smartech('register', '303d01c87235c518bbbf52b2d4301eef');
      smartech('identify', '');{" "}
    </script>
    </Router>
  </React.StrictMode>
);

