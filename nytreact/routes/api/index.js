const router = require("express").Router();
const articleRoutes = require("./apiRoutes");

// Article routes
router.use("/article", articleRoutes);

module.exports = router;