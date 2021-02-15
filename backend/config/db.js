const mongoose = require("mongoose");
const { mongoURI } = require("./keys");

async function connectToDB() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGODB CONNECTED");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectToDB;
