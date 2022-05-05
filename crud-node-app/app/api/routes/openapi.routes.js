const express = require("express");
const swaggerUi = require("swagger-ui-express");

const openApiDocument = require("../openapi.json");
const { auth } = require("../middleware/auth.js");

const router = express.Router();

router.use("/docs", auth, swaggerUi.serve, swaggerUi.setup(openApiDocument));

module.exports = router;
