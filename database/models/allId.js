const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const idSchema = new Schema({
  jobId: { type: String, required: true },
  jobposterId: { type: String, required: true },
  jobhandlerId: { type: String, required: true },
  jobpendingId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: String,
  userPassword: String,

});

const Id = mongoose.model("Id", idSchema);

module.exports = Id;