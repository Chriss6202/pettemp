const mongoose = require("mongoose");
var debug = require('debug')('PetBook:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb://188.166.91.212:27017/petbook")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    });
