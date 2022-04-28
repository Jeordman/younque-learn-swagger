const express = require("express");
const presenters = require("./db/presenters");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const PORT = process.env.PORT || 8080;

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/", (_, res) => {
    res.send("Hello World!");
});

app.get("/api/presenters", (_, res) => {
    res.status(200).json(presenters);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
