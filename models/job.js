const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobId: { type: String, required: true },
  jobTitle: String,
  jobDescription: String,
  jobPoster: String,
  jobHandler: String,
  jobPrice: Number,
  jobAccepted: String,
  jobPending: String,
  jobStatus: String,
  date: { type: Date, default: Date.now },
  id: string,


});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;