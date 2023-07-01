const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");
const route = require("./routes/authRoutes");
dotenv.config();

connectDb();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/auth", route);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.bgBlue.white);
});
