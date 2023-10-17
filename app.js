// serverApp.js
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const sellerRoutes = require("./routes/sellerroutes");
const router = express.Router();

const app = express();
app.use(express.json());

// Connect to MongoDB
const mongoURI =
  "mongodb+srv://seotooler1:seo12345@cluster0.ctoyryf.mongodb.net/seotooler1?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error: " + err.message);
  });

// seller
const sellerController = require("./controllers/sellerController");

const categoriesController = require("./controllers/categoriesController");

const AllCategoriesController = require("./controllers/getAllCategories");

app.use(express.json());

app.get(
  "/categories/:category",
  categoriesController.getSubcategoriesByCategory
);

// all categories
app.get("/categories", AllCategoriesController.getAllCategories);

// seller
app.use("/api/sellers", sellerRoutes);

app.use("/api", router);

// Use user routes
app.use("/", userRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
