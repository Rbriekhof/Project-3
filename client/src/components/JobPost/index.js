import React from "react";

const JobPost = ({ handleChange, handleSubmit, postedDetails }) => {
    return (
            <form>
                <div className="form-group">
                    <input
                    className="col-12 form-control"
                    name="jobTitle"
                    onChange={handleChange}
                    type="text"
                    value={postedDetails.jobTitle}
                    placeholder="Job title"
                    />
                </div>
                <div className="form-group">
                <textarea
                    className="col-12 form-control"
                    name="jobDescription"
                    onChange={handleChange}
                    type="text"
                    value={postedDetails.jobDescription}
                    placeholder="Job description"
                />
                </div>
                <div className="form-group">
                <input
                    className="col-12 form-control"
                    name="jobPrice"
                    onChange={handleChange}
                    type="number"
                    value={postedDetails.jobPrice}
                    placeholder="post price"
                />
                </div>
                {/*
                <div className="form-group">
                <select
                    className="form-control"
                    onChange={handleChange}
                    name="ctg"
                    value={postedDetails.ctg}
                >
                    <option>Moduler</option>
                    <option>Non-moduler</option>
                </select>
                </div>
                */}
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Post Job
                </button>
            </form>
        )
}
export default JobPost 