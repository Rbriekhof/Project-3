const router = require("express").Router();
// const userRoutes = require("./user");
// const loginRoutes = require ("./login");
const taskRoutes = require("./tasklist");

// router.use("/user", userRoutes);
// router.use("/login", loginRoutes);
router.use("/tasklist", taskRoutes);

module.exports = router;
