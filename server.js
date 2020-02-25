
/* const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("body-parser").text());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://biswas:testing123@ds117145.mlab.com:17145/heroku_z8mn8k1z");


app.listen(PORT, () => {
  console.log (' 🌎==> API server now on port ${PORT}!');
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
}); */

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const Chatkit = require('@pusher/chatkit-server')

const routes = require("./routes/index");
const users = require("./routes/api/user");

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:ac606406-27fc-49c5-ba04-452cc26264eb',
    key: '12d3e1fb-c7fb-4dbf-bf90-b095b552a46c:95yHb/PCPpYmyMpmcz3AUV99ROifmeWcJftsG77TCjM=',
  })

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require("express-session")({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", routes);

app.post('/users', (req, res) => {
    const { username } = req.body
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(() => res.sendStatus(201))
      .catch(error => {
        if (error.error === 'services/chatkit/user_already_exists') {
          res.sendStatus(200)
        } else {
          res.status(error.status).json(error)
        }
      })
  })
  
  app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
  })

// passport config
const userSchema = require("./models/user");

passport.use(new LocalStrategy(userSchema.authenticate()));
passport.serializeUser(userSchema.serializeUser());
passport.deserializeUser(userSchema.deserializeUser());

// mongoose
/* mongoose.connect("mongodb://localhost/passport_local_mongoose_express4");
 */
mongoose.connect(process.env.MONGODB_URI || "mongodb://biswas:testing123@ds117145.mlab.com:17145/heroku_z8mn8k1z");

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});


module.exports = app;
