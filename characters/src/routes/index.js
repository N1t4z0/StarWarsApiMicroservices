const Router = require("express");
const Character = require("../data");
const response = require("../utils/response");

const router = Router();

router.get("/", async (req, res) => {
    const characters = await Character.list();
    response.success(res, 200, characters);
    }
);

router.post("/", async (req, res) => {
    const nerCharacter = await Character.create(req.body);
    response.success(res, 201, nerCharacter);       
    },
);

module.exports = router;