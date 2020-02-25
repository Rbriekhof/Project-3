import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Signup from "./pages/signup/signup";
import JobCreation from "./job/Jobpost";
import JobPosting from "./pages/SaveJob";
// import UsernameForm from './components/UsernameForm'
import ChatScreen from '../src/chat/ChatScreen'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'

    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen'

        })
      })
      .catch(error => console.error('error', error))
  }

  render() {
    // if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
    //   return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    // }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/signup" component={Signup} /> */}
            <Route path="/jobcreation" component={JobCreation} />
            <Route path="/jobpost" component={JobPosting} />
  
  
          </Switch>
  
        </div>
      </Router>
    )
  }
}

// export default App;
