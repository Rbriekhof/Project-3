import React from "react";
import {Row, Col} from "../Grid"

const SavedJobs = props => {
    return (props.savedJobs.length === 0) ? (
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
                    <h3>Jobs that You Created</h3>
                    {console.log("got result")}
                    {props.savedJobs.map(savedjob => {
                        return (
                            <div class="col-lg-12 bottom-pad">
                                    <div class="row no-gutters">
                                <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                    {/* col-3 show image of the book */}
                                    <div class="col-md-3">
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body">
                                        <Row>
                                            <h2 className="bookTitle">{savedjob.jobTitle}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="bookAuthor">{savedjob.jobDescription}</h3>
                                        </Row>
                                        </div>
                                        </div>
                                {/* </Row>*/}
                                <br></br>
                                    {/*
                                    <Row className="buttonDiv "> 
                                    */}
                                    <button className="deleteBook btn btn-danger" id={savedjob._id} onClick={() => props.handleDeleteButton(savedjob._id)}>
                                        Delete Book
                                    </button>
                                </Row>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedJobs