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

filmSchema.statics.list = async function() {
    return await this.find()
    .populate("planets",["_id","name"])
    .populate("characters",["_id","name"])
   }
   
   filmSchema.statics.get = async function(id) {
       return await this.findById(id)
       .populate("planets",["_id","name"])
       .populate("characters",["_id","name"])
     };
   
     filmSchema.statics.insert = async function(film) {
       return await this.create(film)
   }

module.exports = filmSchema;