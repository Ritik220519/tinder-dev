const mongoose = require("mongoose");

 async function connectToDatabase() {
  await mongoose.connect(
    "mongodb+srv://rtksri123:Ritik22@cluster-all.vqekfl0.mongodb.net/tinderDB"
  );
};

module.exports = connectToDatabase;