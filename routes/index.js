const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");

// API Routes
router.use("/api/v1", apiRoutes);
router.use("/user", userRoutes)

module.exports = router;