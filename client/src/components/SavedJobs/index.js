import React, { Component } from "react";
import {Row, Col} from "../Grid";
import posts from '../LocalPosts/posts';

/* confirmClick(jobId, e) {
    alert(jobId + 'Confirmed!');
    API.updateTask(jobId, "confirmed")
        .then(this.setState({ message: "Your job has been posted" }))
        .catch(err => console.log(err))
  }

  declineClick(jobId, e) {
    alert(jobId + 'Declined!');
  }

  acceptClick(jobId, e) {
    alert(jobId + 'Accepted!');
  } */

    const SavedJobs = props => {
        return (
            console.log (props.savedJobs),
            props.savedJobs.length === 0) ? (
            
            <div className="card">
            {console.log("length 0")}
                <div className="card-body player">
                    <div className="article">
                        <h3>No Saved Jobs</h3>
                    </div>
                </div>
            
            </div>
        ):(
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Created Jobs</h3>
                        {console.log("got result")}
                        {props.savedJobs.map(savedjob => {
                            return (savedjob.jobStatus==="accepted")?
                                (
                                 <div class="col-lg-12 bottom-pad">
                                            <div class="row no-gutters">
                                        <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                             
                                            <div class="col-md-1">
                                            </div>
                                            <div class="col-md-11">
                                                <div class="card-body">
                                                    <Row>
                                                        <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                    </Row>
                                                    <Row>
                                                        {"Posted by: "+savedjob.jobPoster}{" / "}{"Job price: $"+savedjob.jobPrice}
                                                    </Row>
                                                    <br />
                                                    <Row>
                                                        {savedjob.jobDescription}
                                                    </Row>
                                                    </div>
                                                    <br />
                                                    <button className="confirmJob  btn btn-success" style={{"margin-left":"-15px"}} onClick={(e) => this.confirmClick(savedjob.jobId)}>
                                                Confirm
                                            </button>
                                            {" "}
                                            <button className="declineJob btn btn-danger" onClick={(e) => this.declineClick(savedjob.jobId)}>
                                                Decline
                                            </button>
                                                </div>
                                            
                                        </Row>
                                    </div>
                                    </div>
                                )
                                :
                                (
                                    (savedjob.jobStatus==="confirmed")?
                                        (
                                            <div class="col-lg-12 bottom-pad">
                                                    <div class="row no-gutters">
                                                <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                    
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-11">
                                                        <div class="card-body">
                                                            <Row>
                                                                <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                            </Row>
                                                            <Row>
                                                                {"Posted by: " + savedjob.jobPoster}{" / "}{"Job price: $" + savedjob.jobPrice}
                                                            </Row>
                                                            <br />
                                                            <Row>
                                                                {savedjob.jobDescription}
                                                            </Row>
                                                            </div>
                                                            <br />
                                                            <button className="deleteBook btn btn-default" style={{"margin-left":"-15px"}} disabled="disabled">
                                                        Job already started
                                                    </button>
                                                        </div>
                                                    
                                                </Row>
                                            </div>
                                            </div>
                                        )
                                            :
                                        (
                                            <div class="col-lg-12 bottom-pad">
                                                    <div class="row no-gutters">
                                                <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                    
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-11">
                                                        <div class="card-body">
                                                            <Row>
                                                                <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                            </Row>
                                                            <Row>
                                                                {"Posted by: " + savedjob.jobPoster}{" / "}{"Job price: $" + savedjob.jobPrice}
                                                            </Row>
                                                            <br />
                                                            <Row>
                                                                {savedjob.jobDescription}
                                                            </Row>
                                                            </div>
                                                            <br />
                                                            <button className="deleteBook btn btn-primary" style={{"margin-left":"-15px"}} onClick={(e) => this.acceptClick(savedjob.jobId)}>
                                                             Accept Job
                                                             </button>
                                                        </div>
                                                    
                                                </Row>
                                            </div>
                                        </div>
                                    )
                                );
                            
                        })}
                    </div>
                </div>
            </div>
        )
    }



export default SavedJobs
