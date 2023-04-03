const express = require("express");
const mongoose = require("mongoose");

const productRouter = require("./routes/product");

const app = express();

const mongoURL = "mongodb+srv://sumon:sumonpal@cluster0.7wbznqh.mongodb.net/e_commerce?retryWrites=true&w=majority"

mongoose.connect(mongoURL,{});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongodb connection error"));

db.once("open", () => {
    console.log("connected to database successfully");
});

app.use(express.json());
app.use(productRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log("server started at port 3000");
});