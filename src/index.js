import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// bila pasng manual
// import "assets/bot/css/bootstrap-grid.css";
// import "assets/bot/css/bootstrap-grid.css.map";
// import "assets/bot/css/bootstrap-grid.min.css";
// import "assets/bot/css/bootstrap-grid.min.css.map";
// import "assets/bot/css/bootstrap-reboot.css";
// import "assets/bot/css/bootstrap-reboot.css.map";
// import "assets/bot/css/bootstrap-reboot.min.css";
// import "assets/bot/css/bootstrap-reboot.min.css.map";
// import "assets/bot/css/bootstrap.css";
// import "assets/bot/css/bootstrap.css.map";
// import "assets/bot/css/bootstrap.min.css";
// import "assets/bot/css/bootstrap.min.css.map";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// pasang via npm
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "assets/css/style.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */},
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
