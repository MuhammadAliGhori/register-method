// controllers/userController.js
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { name, email, username, country, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      username,
      country,
      password: hashedPassword,
    });
    console.log(user, "user");
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        res.status(200).json({ message: "Login successful!" });
        console.log("Login successful!");
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
      console.log("User deleted successfully");
    } else {
      res.status(404).json({ message: "User not found" });
      console.log("User not found");
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
