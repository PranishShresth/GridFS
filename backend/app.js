const express = require("express");
const app = express();
const logger = require("morgan");
const connectToDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const PORT = 5000;

//config
app.use(logger("dev"));
app.use(express.json());

//routes
app.use("/api/user", userRoutes);

//creating a server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

//DB CONFIG
connectToDB();
