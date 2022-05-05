const express = require("express");
const {
    testApi,
    getAllPresenters,
    postPresenter,
    getPresenter,
    editPresenter,
    deletePresenter,
} = require("../controllers/presenterController");

const router = express.Router();
router.use(express.json());

router.get("/", testApi);

router.get("/presenters", getAllPresenters);

router.post("/presenters", postPresenter);

router.get("/presenters/:id", getPresenter);

router.put("/presenters/:id", editPresenter);

router.delete("/presenters/:id", deletePresenter);

module.exports = router;
