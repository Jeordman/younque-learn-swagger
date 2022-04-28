const express = require("express");
const presenters = require("./db/presenters");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const PORT = process.env.PORT || 8080;

// can you make a protected route? with this
// aws cognito
// upload test the swagger docs and then push to s3
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (_, res) => {
    res.send("Hello World!");
});

app.get("/presenters", (_, res) => {
    res.status(200).json(presenters);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
