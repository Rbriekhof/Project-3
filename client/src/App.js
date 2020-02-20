import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/signup/Signup";
import ChatComponent from "./chat/chat";
import JobCreation from "./job/Jobpost";

const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/chat" component={ChatComponent} />
          <Route path="/jobcreation" component={JobCreation} />
          
        </Switch>
      </div>
    </Router>
  )
};
  

export default App;

