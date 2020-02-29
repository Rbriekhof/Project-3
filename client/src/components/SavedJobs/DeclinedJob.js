import React from "react";
import { Row } from "../Grid";

const DeclinedJob = ({ savedjob, ...props }) => {
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
                    <h3 className="text-danger" style={{ "marginLeft": "18px" }}>This job has been declined</h3>
                    <button className="btn btn-danger" style={{ "marginLeft": "18px" }} onClick={() => props.handleDeleteTaskClick(savedjob._id)}>Delete Job</button>
                </div>

            </Row>
        </div>
    </div>);
}

export default DeclinedJob