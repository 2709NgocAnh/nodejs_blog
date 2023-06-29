const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/Nodejs_education_dev");
    console.log("Connect successfully !!");
  } catch (error) {
    console.log("connect failure !!");
  }
}
module.exports = { connect };
