const mongoose = require("mongoose");
var debug = require('debug')('PetBook:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb://172.17.0.2:27017/petbook")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    });
