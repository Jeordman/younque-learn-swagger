// this would be a real database that the functions would reach out to
const presenters = require("../../db/presenters.json");

module.exports = {
    testApi: (_, res) => {
        res.send("API is working");
    },
    getAllPresenters: (_, res) => {
        res.status(200).json(presenters);
    },
    getPresenter: (req, res) => {
        const { id } = req.params;
        console.log('id', id);
        const presenterToReturn = presenters.filter((p) => p.id === +id)[0];
        console.log('toreturn', presenterToReturn);
        if (!presenterToReturn)
            return res.status(404).json({status: '0', type: 'Failed', message: 'Could not find presenter'});
        res.status(200).json(presenterToReturn);
    },
};
