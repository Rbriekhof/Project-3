import React, { Component } from "react";
import API from "../utils/API";

import JobPost from "../components/JobPost"


class SaveJob extends Component {
    //create state
    constructor(props) {
        super(props);
    this.state = {
        jobdetails: {
            jobId: "001",
            jobTitle: "New Job",
            jobDescription : "This is description of New Job",
            jobPrice: 1
          },
        error: "",
        message: ""
    };   
}

    handleChange = event => {

        const { jobTitle, value } = event.target;

        this.setState(prevState => ({
            jobdetails: { ...prevState.jobTitle, [jobTitle]: value }
        }));
      }

    handleJPostButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log("this.state.jobdetails")
        console.log(this.state.jobdetails)
        let postedJob = this.state.jobdetails;
        console.log("postedJob")
        console.log(postedJob)

        API.postJob(postedJob)
            .then(this.setState({ message: alert("Your job is posted") }))
            .catch(err => console.log(err))
    }
    render() {
        console.log("entry point")
        return (

            <JobPost jobdetails={this.state.jobdetails} handleJPostButton={this.handleJPostButton} />

        )
    }


}

export default SaveJob 