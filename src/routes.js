import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Clock from "./pages/Clock";
import Stopwatch from "./pages/Stopwatch";
//import Timer from "./pages/Timer"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Clock} />
      <Route path="/clock" component={Clock} />
      <Route path="/stopwatch" component={Stopwatch} />
      <Route path="/alarmclock" component={Clock} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
