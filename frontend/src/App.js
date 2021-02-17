import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./context/UserContext";
import { Registration, Dashboard } from "./views/index";
import DashboardLayout from "./layout/DashboardLayout";
import LayoutWrapper from "./layout/LayoutWrapper";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration}></Route>
        <LayoutWrapper
          exact
          path="/dashboard"
          component={Dashboard}
          layout={DashboardLayout}
        />
        <Route exact path="/d" component={DashboardLayout} />
      </Switch>
    </Router>
  );
};

export default App;
