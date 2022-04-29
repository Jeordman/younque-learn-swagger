const express = require('express');
const swaggerUi = require("swagger-ui-express");
const openApiDocument = require("../openapi.json");

const router = express.Router();

router.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

module.exports = router;
