const {Router} = require("express");
const store = require("../database")

const router = Router();

router.get("/:model", async (req,res) => {
    const {model} = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
})

module.exports = router;