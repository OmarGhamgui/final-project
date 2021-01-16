const mongoose = require("mongoose");
const config = require("config");

const mongoUri = config.get("mongoUri");

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('database is connected')
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDb;