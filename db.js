const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://prashant:prashant@cluster0.jtmxn.mongodb.net/Carrent-system",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("Connection Successfull");
  });
  connection.on("error", () => {
    console.log("Connection Failed");
  });
}

connectDB();
module.exports = mongoose;
