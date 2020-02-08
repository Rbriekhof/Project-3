import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup";

const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  )
};
  

export default App;

