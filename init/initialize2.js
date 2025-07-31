const mongoose = require("mongoose");
const initData = require("./data2.js");
const collection = require("../models/collection.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/CatColl";

async function main()
{
  await mongoose.connect(MONGO_URL);
}


main().then(()=>{
  console.log("Connected to db");
}).catch((err)=>{
  console.log(err);
})


const initDB = async () =>{
  await collection.deleteMany({});
  await collection.insertMany(initData.catData);
  console.log("Data was initialize");
}


initDB();