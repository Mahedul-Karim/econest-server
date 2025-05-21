const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env.local" });

const { connectDB } = require("./config/db");
const { handleError } = require("./controller/error");

const userRoutes = require("./routes/user");
const tipRoutes = require("./routes/tip");

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/tips", tipRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
