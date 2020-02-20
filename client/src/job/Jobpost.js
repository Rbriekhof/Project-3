import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "../components/FormContainer";


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  class Jobpost extends Component {
    render() {
      return (
        <div className="col-md-6">
          <h3> Job Posting Form </h3>
          <FormContainer />
        </div>
      );
    }
  }

  export default Jobpost;