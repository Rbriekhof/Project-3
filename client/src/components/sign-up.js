import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
			redirectTo: null,

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			phone: this.state.phone,
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h4>Sign up</h4>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="username">Username</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="password">Password: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="email">email</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="email"
								name="email"
								placeholder="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="address">address</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="address"
								name="address"
								placeholder="123 West ABC Street"
								value={this.state.address}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="city">city</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="city"
								name="city"
								placeholder="Topeka"
								value={this.state.city}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="state">state</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="state"
								name="state"
								placeholder="Kansas"
								value={this.state.state}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="zip">zip</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="zip"
								name="zip"
								placeholder="66209"
								value={this.state.zip}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="phone">phone</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="phone"
								name="phone"
								placeholder="913-555-5555"
								value={this.state.phone}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup
