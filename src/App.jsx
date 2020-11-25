import React from "react";
import "../src/App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "../src/components/layout/Navbar";
import Dashboard from "../src/components/pages/Dashboard";
import StudentsTab from "../src/components/pages/StudentsTab";
import Results from "../src/components/pages/Results";
import ErrorPage from "../src/components/pages/ErrorPage";
import Login from "./components/pages/Auth/Login";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/students" component={StudentsTab} />
        <Route path="/results" component={Results} />
        <Route path="/login" component={Login} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default App;
