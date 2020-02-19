import React from "react";

export default ({ handleChange, handleSubmit, postedDetails }) => {
  return (
    <div className="col-md-6">
    <h3> Job Creation Form </h3>
      <form className="container-fluid">
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
            placeholder="Job price"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit job details
        </button>
      </form>
    </div>
  );
};
