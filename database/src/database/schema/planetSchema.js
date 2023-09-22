const {Schema} = require('mongoose');

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{type:String, ref:"characters"}],
    films: [{type:String, ref:"films"}]
})

planetSchema.statics.list = async function() {
    return await this.find()
    .populate("films",["_id","name"])
    .populate("residents",["_id","name"])
   }
   
   planetSchema.statics.get = async function(id) {
       return await this.findById(id)
       .populate("films",["_id","name"])
       .populate("residents",["_id","name"])
     };
   
     planetSchema.statics.insert = async function(film) {
       return await this.create(film)
   }

module.exports = planetSchema;