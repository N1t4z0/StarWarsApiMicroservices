const Router = require("express");
const Character = require("../data");

const router = Router();

router.get("/", async (req, res) => {
    const characters = await Character.list();
    res.status(200).json(characters);}
);

module.exports = router;