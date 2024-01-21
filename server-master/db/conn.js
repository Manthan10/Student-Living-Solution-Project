const mongoose = require("mongoose");
// const password = encodeURIComponent("Priyanshu@123");

const DB =
  "mongodb+srv://FoodExpress:bm5xqofy@cluster0.p3qjpul.mongodb.net/test";
// console.log("connecting to db");
setTimeout(() => {
  console.log("connecting to db....");
}, 1);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log(err);
  });
