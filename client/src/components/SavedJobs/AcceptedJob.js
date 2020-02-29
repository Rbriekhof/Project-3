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

                    {
                        localStorage.getItem('LoggedInUser')===savedjob.jobPoster?
                        (
                            <div>
                                <button className="btn btn-success" style={{ "marginLeft": "18px" }} onClick={(e) => props.handleStatusUpdateClick(savedjob._id, 'confirmed')}>
                                    Confirm
                                </button>
                                {" "}
                                <button className="btn btn-danger" onClick={(e) => props.handleStatusUpdateClick(savedjob._id, null)}>
                                    Decline
                                </button>   
                            </div>                                                            
                        )
                        :
                        (
                            <button className="deleteBook btn btn-default" style={{ "marginLeft": "18px", "opacity": "100" }} disabled="disabled">
                                Already accepted by someone
                            </button>
                        )
                
                    }
                                                        




                                        
                </div>
            </Row>
        </div>
    </div>);
}

export default AcceptedJob