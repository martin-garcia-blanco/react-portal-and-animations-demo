import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Animations from "./pages/Animations/Animations";
import PortalPage from "./pages/PortalPage/PortalPage";
import Landing from "./pages/Landing/Landing";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/portals" component={PortalPage} />
        <Route exact path="/animations" component={Animations} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
