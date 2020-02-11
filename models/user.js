const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        match: [/\d{3}-\d{3}-\d{4}/, "Please enter a 10-digit phone number of the format xxx-xxx-xxxx"],
    },
});

userSchema.pre("save", function (next) {
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.password, salt, null, (err, hash) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                this.password = hash;
                next();
            });
        });
        next();
    }
});

userSchema.methods.comparePassword = function (pass, cb) {
    bcrypt.compare(pass, this.password, (err, isMatch) => {
        if (err) { return cb(err); }
        cb(null, isMatch);
    });
};
const User = mongoose.model("User", userSchema);
module.exports = User;
