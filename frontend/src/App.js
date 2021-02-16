import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./context/UserContext";
import { Registration } from "./views/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration}></Route>
      </Switch>
    </Router>
  );
};

export default App;
