import React, { Component } from 'react';
import API from "../../utils/API";

class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
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
        console.log("form submitted");
        if (!this.state.firstName || !this.state.lastName) {
            alert("Please enter a first and last name!");
            return;

        }
        else if (this.state.password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }
        else if (!this.state.address || !this.state.city || !this.state.state || !this.state.zip) {
            alert("Please enter a address, city, state, and zip code!");
            return;
        }
        else if (!this.state.phone) {
            alert("Please enter a phone number!");
            return;
        }

        API.saveUser ({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone
        })
        .then(res => {
            alert("Profile created!  Please login");
            window.location = "/";
        })
        .catch(err => console.log(err)); 

    }
    render() {
        return (
            <div className="bg" >

                <nav className="transparent z-depth-0">
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right">
                            <li><a href="/" className="white-text">Log In</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="container blur signupForm">
                    <div className="row">
                        <form className="col s12 ">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input
                                        name='firstName'
                                       placeholder='John'
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="firstName" className="teal-text accent-4-text active">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        name='lastName'
                                       placeholder='Doe'
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="lastName" className="teal-text accent-4-text active">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input
                                        name='email'
                                        type='email'
                                       placeholder='abc@domain.com'
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="email" className="teal-text accent-4-text active">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        name='password'
                                        type='password'
                                       placeholder='******'
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="password" className="teal-text accent-4-text active">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        name='address'
                                       placeholder='123 ABC St'
                                        value={this.state.address}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="address" className="teal-text accent-4-text active">Address</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input
                                        name='city'
                                       placeholder='Topeka'
                                        value={this.state.city}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="city" className="teal-text accent-4-text active">City</label>
                                </div>
                                <div className="input-field col s4">
                                    <input
                                        name='state'
                                       placeholder='KS'
                                        value={this.state.state}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="state" className="teal-text accent-4-text active">State</label>
                                </div>
                                <div className="input-field col s4">
                                    <input
                                        name="zip"
                                       placeholder="66209"
                                        value={this.state.zip}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="zip" className="teal-text accent-4-text active">Zip</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s3"></div>
                                <div className="input-field col s6">
                                    <input
                                        name='phone'
                                        placeholder='913-555-5555'
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                    />
                                    <label for="phone" className="teal-text accent-4-text active">Phone</label>
                                </div>
                                <div className="input-field col s3"></div>
                            </div>
                            <div className="center-align">
                                <button className="btn waves-effect waves-light" onClick={this.handleFormSubmit} id="signupBtn">Sign Up</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;