import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { Registration, Dashboard, FileUpload } from "./views/index";
import DashboardLayout from "./layout/DashboardLayout";
import LayoutWrapper from "./layout/LayoutWrapper";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <UserProvider>
          <Route exact path="/" component={Registration}></Route>
          <LayoutWrapper
            path="/dashboard"
            component={Dashboard}
            layout={DashboardLayout}
          />
          <LayoutWrapper
            exact
            path="/fileUpload"
            component={FileUpload}
            layout={DashboardLayout}
          />
        </UserProvider>
      </Switch>
    </Router>
  );
};

export default App;
