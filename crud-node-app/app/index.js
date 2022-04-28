const express = require("express");
const app = express();

const swaggerRoutes = require('./api/routes/swagger.routes.js');
const presenterRoutes = require('./api/routes/presenter.routes.js');

const PORT = process.env.PORT || 9000;

app.use("/", swaggerRoutes, presenterRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
