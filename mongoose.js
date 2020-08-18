const mongoose = require("mongoose");

// connect to mongo db
const mongoUri = "mongodb://gguser1:gguser1@ds241019.mlab.com:41019/gotbattle";
let options = {
  keepAlive: 1,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose.connect(mongoUri, options);
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
