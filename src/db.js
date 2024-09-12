const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://gbcapri:1234@cluster0.s0hba.mongodb.net/";

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log("conectado com o banco"))
  .catch((err) => console.log(err));

module.exports = mongoose;