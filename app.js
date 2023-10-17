// serverApp.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

// Connect to MongoDB
const mongoURI =
  "mongodb+srv://seotooler1:seo12345@cluster0.ctoyryf.mongodb.net/seotooler1?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use user routes
app.use("/", userRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
