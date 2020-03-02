import React from "react";
import { Row } from "../Grid";

const AcceptedJob = ({ savedjob, ...props }) => {
    return (<div className="col-lg-12 bottom-pad">
        <div className="row no-gutters">
            <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>

                <div className="col-md-1">
                </div>
                <div className="col-md-11">
                    <div className="card-body">
              
                            
                            <div>
                            <Row>
                                <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                            </Row>
                            <Row>
                                {"Posted by: " + savedjob.jobPoster}{" / "}{"Job price: $" + savedjob.jobPrice}
                            </Row>
                            
                            <Row>
                                {savedjob.jobDescription}
                            </Row>
                            </div>
                        
                    </div>
                    <br />

                    {
                        localStorage.getItem('LoggedInUser')===savedjob.jobPoster?
                        (
                            
                            <div>
                                <button className="deleteBook btn btn-info" style={{ "marginLeft": "18px"}} disabled="disabled">
                                    {savedjob.jobAccepted + " has accepted this job"}
                                </button>
                               <br/><br/>
                                <button className="btn btn-success" style={{ "marginLeft": "18px" }} onClick={(e) => props.handleStatusUpdateClick(savedjob._id, 'confirmed', savedjob.jobAccepted, savedjob.jobAccepted)}>
                                    Confirm
                                </button>
                                
                                <button className="btn btn-warning" style={{ "marginLeft": "18px" }} onClick={(e) => props.handleStatusUpdateClick(savedjob._id, null, null, null)}>
                                    Decline
                                </button>  
                                
                                <button className="btn btn-danger" style={{ "marginLeft": "18px" }} onClick={() => props.handleDeleteTaskClick(savedjob._id)}>
                                    Delete Job
                                </button> 
                            </div>                                                            
                        )
                        :
                        (
                            localStorage.getItem('LoggedInUser')===savedjob.jobAccepted?
                            (
                            <button className="deleteBook btn btn-info" style={{ "marginLeft": "18px", "opacity": "100" }} disabled="disabled">
                                You have accepted this job
                            </button>
                            )
                            :
                            (
                                <button className="deleteBook btn btn-default" style={{ "marginLeft": "18px", "opacity": "100" }} disabled="disabled">
                                Already accepted by someone
                            </button>
                            )
                        )
                
                    }
                                                        




                                        
                </div>
            </Row>
        </div>
    </div>);
}

export default AcceptedJob