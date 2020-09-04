const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHander");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
const lists = require("./routes/lists");

// Initialize express app
const app = express();

// Enable cors
app.use(cors());

// Body parser
app.use(express.json());

// Mount routers
app.use("/api/v1/lists", lists);

// Middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
