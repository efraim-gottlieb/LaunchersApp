import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import errorHanding from "./middlewares/errorHanding.js";
import launcherRoutes from "./routes/launcher.routes.js"

import { connectDB } from "./db/mongo.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/api/launchers', launcherRoutes)


app.use(errorHanding);

app.get("/", (req, res) => {
  res.send("hello");
  console.log("pinging root");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
