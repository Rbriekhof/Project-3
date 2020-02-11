const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const User = require("../../models/user");

require("dotenv").config();


const passportOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(
    passportOptions,
    (jwt_payload, done) => {
        User.findById(jwt_payload._id, (err, user) => {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }
));

// Matches with /api/user
router.route("/")
    .post(userController.create)
    .get(userController.findAll);

// Matches with /api/user/:id
router
    .route("/:id")
    .get(passport.authenticate("jwt", { session: false }), userController.findById)
    .put(passport.authenticate("jwt", { session: false }), userController.update)
    .delete(passport.authenticate("jwt", { session: false }), userController.remove);


module.exports = router;