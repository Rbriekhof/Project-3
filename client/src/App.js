import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

import Home from "./pages/Home/Home";
import Signup from "./components/sign-up";
import LoginForm from './components/login-form'
import JobCreation from "./job/Jobpost";
import JobPosting from "./pages/SaveJob";
import JobList from "./pages/SavedJobs";
import Navbar from "./components/navbar";
import UsernameForm from './components/UsernameForm'
import ChatScreen from './ChatScreen'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)

  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
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

    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }

    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup />}
        />
        <Route path="/jobcreation" component={JobCreation} />
        <Route path="/jobpost" component={JobPosting} />
        <Route path="/jobs" component={JobList} />
        <Route path="/chat" component={ChatScreen} />
      </div>
    );
  }
}
export default App;




