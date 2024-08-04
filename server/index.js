import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
//donot forget to add the js extenstion end of the path file
import route from "./routes/userRoutes.js";
import cors from "cors";

//create an instance of express application
const app = express();
//apply the json parsing middleware
app.use(bodyParser.json());

app.use(cors());
//load the environment variable from .env
dotenv.config();

//now we can simply load the port and connection string
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

//connecting the mongodb database
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT} `);
    });
  })
  .catch((error) => console.log(error));

//mount the middleware
app.use("/api", route);
