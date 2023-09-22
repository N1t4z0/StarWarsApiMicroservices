const {Schema} = require('mongoose');

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type:String, ref:"characters"}],
    planets: [{type:String, ref:"planets"}]
})

module.exports = filmSchema;