// this would be a real database that the functions would reach out to
const presenters = require('../../db/presenters.json');

module.exports = {
    testApi: (_, res) => {
        res.send('API is working');
    },
    getAllPresenters: (_, res) => {
        res.status(200).json(presenters);
    }
}
