import "./styles/css/index.css";

import * as serviceWorker from "./app/services/serviceWorker";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import About from "./app/pages/about/about";
import App from "./app/App";
import DownloadPage from "./app/pages/downloads/downloads";
import GettingStartedPage from "./app/pages/Gettingstarted/getting_started";
import React from "react";
import ReactDOM from "react-dom";
import { urls } from "./assets/app.json";

ReactDOM.render(
  <BrowserRouter keyLength={22}>
    <Switch>
      <Route path={urls.routes[0]} exact={true} component={App} />
      <Route path={urls.routes[1]} exact={true} component={About} />
      <Route path={urls.routes[2]} exact={true} component={DownloadPage} />
      <Route
        path={urls.routes[3]}
        exact={true}
        component={GettingStartedPage}
      />
      {/*<Redirect from="/" to="/#" />*/}
      <Router basename="/map/5AJA3RefFuTZ8z4Gn6BjMgZRgPZ2"> </Router>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
