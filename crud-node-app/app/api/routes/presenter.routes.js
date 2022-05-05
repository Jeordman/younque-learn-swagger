const express = require("express");
const {
    testApi,
    getAllPresenters,
    getPresenter
} = require("../controllers/presenterController");

const router = express.Router();

router.get("/", testApi);

router.get("/presenters", getAllPresenters);

router.get("/presenters/:id", getPresenter);

module.exports = router;
