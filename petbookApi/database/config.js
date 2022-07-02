const mongoose = require("mongoose");
var debug = require('debug')('PetBook:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo:27017")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    });
