const mongoose = require('mongoose');
const MONGO_URI = require('../../envs').MONGO_URI;

const conn = mongoose.createConnection(MONGO_URI);

const Characters = conn.model("characters", require("./schema/characterSchema"));
const Films = conn.model("films", require("./schema/filmSchema"));
const Planets = conn.model("planets", require("./schema/planetSchema"));

Planets.list().then((res) => console.log(res));

module.exports = {
Characters:conn.model("characters", require("./schema/characterSchema")),
Films:conn.model("films", require("./schema/filmSchema")),
Planets:conn.model("planets", require("./schema/planetSchema")),
}