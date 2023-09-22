const mongoose = require('mongoose');
const MONGO_URI = require('../../envs').MONGO_URI;

const conn = mongoose.createConnection(MONGO_URI);

const Characters = conn.model("characters", require("./characterSchema"));
const Films = conn.model("films", require("./filmSchema"));
const Planets = conn.model("planets", require("./planetSchema"));

Planets.find().then((res) => console.log(res[0]));

module.exports = {
Characters:conn.model("characters", require("./characterSchema")),
Films:conn.model("films", require("./filmSchema")),
Planets:conn.model("planets", require("./planetSchema")),
}