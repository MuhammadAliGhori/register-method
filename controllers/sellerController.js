const Seller = require("../models/sellerModel");

const createSeller = async (req, res) => {
  console.log("Request received to create seller:", req.body);
  const {
    userId,
    service,
    category,
    accountName,
    description,
    price,
    accountAge,
    email,
    pnumber,
  } = req.body;
  try {
    const seller = new Seller({
      userId,
      service,
      category,
      accountName,
      description,
      price,
      accountAge,
      email,
      pnumber,
    });

    await seller.validate();
    await seller.save();
    res.status(201).json(seller);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      for (const field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      res.status(400).json({ errors });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const getSellers = async (req, res) => {
  try {
    const sellers = await Seller.find().populate("userId");
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSeller,
  getSellers,
};
