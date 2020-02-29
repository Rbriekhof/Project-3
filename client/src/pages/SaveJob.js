import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
import Form from "../components/JobPost/index"


class SaveJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postedDetails: {
            jobId: "001",
            jobTitle: "",
            jobDescription: "",
            jobPrice: 3000,
            jobStatus:null,
            jobPoster: localStorage.getItem('LoggedInUser')
          },
          jobs: []
        };
      }
    
      handleChange = e => {
          //console.log(e.target);
        const { name, value } = e.target;
        
    
        this.setState(prevState => ({
            postedDetails: { ...prevState.postedDetails, [name]: value }
        }));
      };
    
      handleSubmit = e => {
        e.preventDefault();
    
        this.setState(prevState => ({
          jobs: [...prevState.jobs, prevState.postedDetails],
          postedDetails: { jobId:"", jobTitle: "", jobDescription: "", jobPrice: 30000, jobPoster: "" }
        }));

        console.log(this.state.postedDetails)

        API.saveTask(this.state.postedDetails)
            .then(this.setState({ message: "Your job has been posted" }))
            .catch(err => console.log(err))
      };
    
      render() {
        return (
          <Container fluid className="container">
                
                <Container>
            
            <Form
              handleChange={this.handleChange}
              postedDetails={this.state.postedDetails}
              handleSubmit={this.handleSubmit}
            />
            <div className="post-container">
              <ul>
                {this.state.jobs.map((job, index) => (
                  <li key={index}>
                    <ul className="post-tile">
                    <li className="post-tile-price">{job.jobPoster}</li>
                      <li className="post-tile-name">{job.jobTitle}</li>
                      <li className="post-tile-description">{job.jobDescription}</li>
                      <li className="post-tile-price">${job.jobPrice}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
          </Container>
        );
      }


}

export default SaveJob