const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  accountName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  accountAge: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/,
  },
  pnumber: {
    type: Number,
    required: true,
  },
});

const seller = mongoose.model("seller", sellerSchema);

module.exports = seller;
