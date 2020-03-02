import React from "react";
import { Row } from "../Grid";

const ConfirmedJob = ({ savedjob, ...props }) => {
    return (<div className="col-lg-12 bottom-pad">
        <div className="row no-gutters">
            <Row className="SearchResult row" id={savedjob.jobTitle + "Card"}>

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
                            <button className="deleteBook btn btn-default" style={{ "marginLeft": "18px" }} disabled="disabled">
                                Job has been started by {savedjob.jobHandler}
                            </button>
                        )
                        :
                        (
                            localStorage.getItem('LoggedInUser')===savedjob.jobAccepted?
                            (
                                <button className="deleteBook btn btn-default" style={{ "marginLeft": "18px" }} disabled="disabled">
                                    You have started this job. Please communicate with job poster for progress update.
                                </button>
                            )
                            :
                            (
                                <button className="deleteBook btn btn-default" style={{ "marginLeft": "18px" }} disabled="disabled">
                                    Job already started
                                </button>
                            )
                        )
                    }
                    
                </div>

            </Row>
        </div>
    </div>);
}

export default ConfirmedJob