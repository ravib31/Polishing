const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

app.use(express.json());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

  app.use(userRoute)

 