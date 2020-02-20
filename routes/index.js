/* const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router; */

const express = require('express');
const passport = require('passport');
const userSchema = require('../models/user');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('Home', { user : req.user });
});

router.get('/Signup', (req, res) => {
    res.render('Signup', { });
});

router.post('/Signup', (req, res, next) => {
    userSchema.Signup(new userSchema({ username : req.body.username }), req.body.password, (err, userSchema) => {
        if (err) {
          return res.render('Signup', { error : err.message });
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});


router.get('/', (req, res) => {
    res.render('Home', { user : req.user, error : req.flash('error')});
});

router.post('/', passport.authenticate('Home', { failureRedirect: '/', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

module.exports = router;
