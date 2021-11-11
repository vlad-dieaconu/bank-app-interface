import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />

        <Router>
          <Switch>
               <Route path="/home" exact={true} component={Home} />
               <Route path="/register" exact={true} component={Register} />
          </Switch>
        </Router>
      </div>


    );
  }
}

export default App;
