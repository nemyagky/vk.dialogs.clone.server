import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import config from "./config";
import dialogsRoutes from "./routes/dialogs.router";
import messageRoutes from "./routes/messages.routes";
import registerRoutes from "./routes/register.routes";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(registerRoutes);
app.use(messageRoutes);
app.use(dialogsRoutes);

mongoose.connect(config.mongodb.url, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log("connected");
});

app.listen(config.server.port, (err) => {
  if (err) {
    console.log(err);
  }
});
