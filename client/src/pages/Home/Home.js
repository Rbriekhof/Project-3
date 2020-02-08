import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
    state = {
        email: '',
        password: '',

    };
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        if (name === "password") {
            value = value.substring(0, 30);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)

        event.preventDefault();
        if (!this.state.email || !this.state.password) {
            alert("Please enter your email and password to login");
            return
        }

        API.login({
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                if (res.data.message) {
                    alert(res.data.message);
                } else {
                    window.location = "/profile/" + res.data.sub
                }
            })
            .catch(err => console.log(err));

        this.setState({
            email: '',
            password: '',
        });
    }
    render() {
        return (
            <div className="bg">

                <nav className="transparent z-depth-0">
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right">
                            <li><a href="/Signup" className="blue-grey-text darken-10-text">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="container blur homeForm">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input
                                        name='email'
                                        type='email'
                                        placheholder='abc@domain.com'
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="email" className="teal-text accent-4-text">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        name='password'
                                        type='password'
                                        placheholder='******'
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="password" className="teal-text accent-4-text">Password</label>
                                </div>
                            </div>

                            <div className="center-align">
                                <button className="btn waves-effect waves-light" id="loginBtn" onClick={this.handleFormSubmit}>Log In</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;