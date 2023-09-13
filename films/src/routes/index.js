const Router = require("express");
const Film = require("../data");

const router = Router();

router.get("/", async (req, res) => {
    const films = await Film.list();
    res.status(200).json(films);}
);

module.exports = router;