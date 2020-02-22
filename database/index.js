//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://biswas:testing123@ds117145.mlab.com:17145/heroku_z8mn8k1z'

mongoose.connect(uri, {useNewUrlParser:true}).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log('Connected to Mongo');

    },
    err => {
        /** handle initial connection error */
        console.log('error connecting to Mongo: ')
        console.log(err);

    }
);


module.exports = mongoose.connection