const mongoose = require("mongoose");
const initData = require("./data.js");
const collection = require("../models/collection.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/DogAndCatColl";

async function main()
{
  await mongoose.connect(MONGO_URL);
}


main().then(()=>{
 console.log("Connected to DB");
}).catch((err)=>{
 console.log(err);
})



const initDB = async () =>{
 await collection.deleteMany({});
 await collection.insertMany(initData.data);
 console.log("Data was initialize");
};


initDB();