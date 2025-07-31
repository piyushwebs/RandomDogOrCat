const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const collectionSchema = new Schema({
  name:{
    type:String,
  },
  fact:String,
  Country:String,
  image:{
    src:String,
  }
});

const collection = mongoose.model("Collection",collectionSchema);
module.exports = collection;