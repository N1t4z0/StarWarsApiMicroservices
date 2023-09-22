const {Schema} = require('mongoose');

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type:String, ref:"planet"},
    films: [{type:String, ref:"film"}]
});

module.exports = characterSchema;
