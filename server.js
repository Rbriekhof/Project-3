const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

<<<<<<< HEAD

mongoose.connect(process.env.MONGODB_URI || "mongodb://biswas:testing123@ds117145.mlab.com:17145/heroku_z8mn8k1z", { useNewUrlParser: true });
=======
// Connet to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://biswas:testing123@ds117145.mlab.com:17145/heroku_z8mn8k1z");
>>>>>>> 1dbeda2c8c46172b6431aa0d4ba4e8e7c754df7b


app.listen(PORT, () => {
  console.log (' 🌎==> API server now on port ${PORT}!`);
});
