const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
// const mongoose = require("mongoose");
const dogData = require("./init/data.js");
const catData = require("./init/data2.js");
// const MONGO_URL = "mongodb://127.0.0.1:27017/DogAndCatColl";

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(1102, () => {
  console.log("Server Succesfully started");
});

app.get("/DogAndCatImg", (req, res) => {
  res.render("MainFiles/index.ejs");
});

app.get("/DogImg", async (req, res) => {
  let val = dogData;
  let size = val.data.length;
  let idx = Math.floor(Math.random() * size);
  let source = val.data[idx];

  res.render("MainFiles/dogImg.ejs", { source });
});

app.patch("/DogImg", async (req, res) => {
  let val = dogData;
  let size = val.data.length;
  let idx = Math.floor(Math.random() * size);
  let source = val.data[idx].image.src;
  res.redirect("/DogImg");
});

app.get("/CatImg", (req, res) => {
  let val = catData;
  let size = val.catData.length;
  let idx = Math.floor(Math.random() * size);
  let source = val.catData[idx]; 
  res.render("MainFiles/catImg.ejs",{source});
});


app.patch("/CatImg",(req,res)=>{
  let val = catData;
  let size = val.catData.length;
  let idx = Math.floor(Math.random() * size);
  let source = val.catData[idx].image.src;
  res.redirect("/CatImg");
});



app.get("/", (req, res) => {
  res.send("Server Working");
});
