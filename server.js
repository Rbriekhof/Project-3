const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./config/passport');
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server')

const app = express()

const PORT = process.env.PORT || 3001
// Route requires
// const user = require('./routes/user')
const routes = require('./routes')
// const tasklist = require ('./routes/api/tasklist')

const chatkit = new Chatkit.default({
	instanceLocator: 'v1:us1:ac606406-27fc-49c5-ba04-452cc26264eb',
	key: '12d3e1fb-c7fb-4dbf-bf90-b095b552a46c:95yHb/PCPpYmyMpmcz3AUV99ROifmeWcJftsG77TCjM=',
  })

app.use(bodyParser.json())

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(cors())

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use(routes)
// app.use('/user', user)
// app.use('/jobpost', tasklist)

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

// Starting Server 
app.listen(PORT, () => {
	console.log(`>>> App listening on PORT: ${PORT}`)
})
