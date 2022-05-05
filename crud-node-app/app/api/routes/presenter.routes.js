const express = require("express");
const {
    testApi,
    getAllPresenters,
    postPresenter,
    getPresenter,
    editPresenter,
} = require("../controllers/presenterController");

const router = express.Router();
router.use(express.json());

router.get("/", testApi);

router.get("/presenters", getAllPresenters);

router.post("/presenters", postPresenter);

router.get("/presenters/:id", getPresenter);

router.put("/presenters/:id", editPresenter);

module.exports = router;
