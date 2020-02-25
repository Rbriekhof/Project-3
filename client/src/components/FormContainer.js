import React, { Component } from "react";
/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";
import API from "../utils/API";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newJob: {
        jobTitle: "",
        jobDescription: ""
      },

    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleJobTitle = this.handleJobTitle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleJobTitle(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newJob: {
          ...prevState.newJob,
          jobTitle: value
        }
      }),
      () => console.log(this.state.newJob)
    );
  }

  

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newJob: {
          ...prevState.newJob,
          jobDescription: value
        }
      }),
      () => console.log(this.state.newJob)
    );
  }

  

  handleFormSubmit(e) {
    e.preventDefault();
    let jobData = this.state.newJob;

    console.log(jobData);
    console.log("desc:");
    console.log();
    alert("You are submitting : \n" + this.state.newJob.jobTitle +"\n"+ this.state.newJob.jobDescription);
    {/*
    fetch("#", {
      method: "POST",
      body: JSON.stringify(jobData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
*/}
API.postJob(jobData)
.then(
    
    this.setState({ message: alert("Your job is posted") })
)
.catch(err => console.log(err))
  }

  handleClearForm(e) {
      console.log("clear form");
    e.preventDefault();
    this.setState({
      newJob: {
        jobTitle: "",
        jobDescription: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        {/* Title of the Job */}
        <Input
          inputType={"text"}
          title={"Job Title"}
          name={"name"}
          value={this.state.newJob.name}
          placeholder={"Enter Job Title"}
          handleChange={this.handleJobTitle}
        />{" "}
        
        {/* About the job */}
        <TextArea
          title={"Describe your job"}
          rows={10}
          value={this.state.newJob.about}
          name={"jobInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Describe your job with a few words"}
        />
        
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
