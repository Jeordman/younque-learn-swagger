const express = require('express');
const { testApi, getAllPresenters }= require('../controllers/presenterController');

const router = express.Router();

 router.get("/", testApi);

 router.get("/presenters", getAllPresenters);


module.exports = router;
