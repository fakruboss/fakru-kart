import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./homepage.js";
import Fashion from "./fashion.js";
import Sports from "./sports.js";
import Electronics from "./electronics.js";
import NotFound from "./not-found.js";

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/electronics" component={Electronics} />
            <Route path="/sports" component={Sports} />
            <Route path="/fashion" component={Fashion} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
