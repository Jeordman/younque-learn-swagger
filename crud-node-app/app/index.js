const express = require("express");
const app = express();

const openApiRoutes = require('./api/routes/openapi.routes.js');
const presenterRoutes = require('./api/routes/presenter.routes.js');

const PORT = process.env.PORT || 9000;

app.use("/", openApiRoutes, presenterRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
