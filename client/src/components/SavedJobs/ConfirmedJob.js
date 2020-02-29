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
                    <button className="deleteBook btn btn-default" style={{ "marginLeft": "-15px" }} disabled="disabled">
                        Job already started
                    </button>
                </div>

            </Row>
        </div>
    </div>);
}

export default ConfirmedJob