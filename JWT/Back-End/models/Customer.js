const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;
