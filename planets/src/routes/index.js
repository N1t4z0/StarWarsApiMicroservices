const Router = require("express");
const Planet = require("../data");

const router = Router();

router.get("/", async (req, res) => {
    const planets = await Planet.list();
    res.status(200).json(planets);}
);

module.exports = router;