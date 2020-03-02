import React, { Component } from "react";
import { Row, Col } from "../Grid";
import posts from '../LocalPosts/posts';
import AcceptedJob from './AcceptedJob';
import DeclinedJob from './DeclinedJob';
import ConfirmedJob from './ConfirmedJob';

const SavedJobs = props => {

    return (
        console.log(props.savedJobs),
        props.savedJobs.length === 0) ? (

            <div className="card">
                {console.log("length 0")}
                <div className="card-body player">
                    <div className="article">
                        <h3>No Saved Jobs</h3>
                    </div>
                </div>

            </div>
        ) : (
            <div className="card">
                <div className="card-body player" style={{"textAlign":"left"}}>
                    <div className="article">
                        <h3>Created Jobs</h3>
                        {props.savedJobs.map(savedjob => {
                            return {
                                'accepted': (<AcceptedJob savedjob={savedjob} handleStatusUpdateClick={props.handleStatusUpdateClick} key={savedjob._id}></AcceptedJob>),
                                'declined': (<DeclinedJob savedjob={savedjob} handleDeleteTaskClick={props.handleDeleteTaskClick} key={savedjob._id}></DeclinedJob>),
                                'confirmed': (<ConfirmedJob savedjob={savedjob} handleStatusUpdateClick={props.handleStatusUpdateClick} key={savedjob._id}></ConfirmedJob>),
                            }[savedjob.jobStatus] ||
                                (
                                    <div className="col-lg-12 bottom-pad">
                                        <div className="row no-gutters">
                                            <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>

                                                <div className="col-md-1">
                                                </div>
                                                <div className="col-md-11">
                                                    <div className="card-body">
                                                        <Row>
                                                            <h4 className="jobTitle">{savedjob.jobTitle}</h4>
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

                                                    {
                                                        localStorage.getItem('LoggedInUser')===savedjob.jobPoster?
                                                            (
                                                                <button className="btn btn-danger" style={{ "marginLeft": "18px" }} onClick={() => props.handleDeleteTaskClick(savedjob._id)}>
                                                                    Delete Job
                                                                </button>                                                                
                                                            )
                                                            :
                                                            (
                                                                <button className="btn btn-primary" style={{ "marginLeft": "18px" }} onClick={() => props.handleStatusUpdateClick(savedjob._id, 'accepted', localStorage.getItem('LoggedInUser'))}>
                                                                    Accept Job
                                                                </button>
                                                            )

                                                    }
                                                                
                                                </div>

                                            </Row>
                                        </div>
                                        <hr />
                                    </div>
                                );
                        })}
                    </div>
                </div>
            </div>
        )
}



export default SavedJobs