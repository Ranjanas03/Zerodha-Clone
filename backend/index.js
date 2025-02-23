require ('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend domain
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization" //Allowed headers
}));
app.get("/allHoldings", async (req , res) =>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});
app.get("/allPositions", async (req , res) =>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req,res) =>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order Saved!");
})
