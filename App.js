import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/signup";
import ChatComponent from "./chat/chat";
import JobCreation from "./job/Jobpost";
import JobPosting from "./pages/SaveJob";
import JobList from "./pages/SavedJobs";
import Nav from "./components/Nav";

const App = () => {
  return(
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/chat" component={ChatComponent} />
          <Route path="/jobcreation" component={JobCreation} />
          <Route path="/jobpost" component={JobPosting} />
          <Route path="/jobs" component={JobList} />
          
        </Switch>
      </div>
    </Router>
  )
};
  

export default App;

