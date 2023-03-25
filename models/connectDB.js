const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(`Error: ${err}`));

module.exports = connection;
