const mongoose = require("mongoose");

const MONGOURI =
  "mongodb+srv://Harsh8055:Harsh8055@cluster0.ex2w1cv.mongodb.net/?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
