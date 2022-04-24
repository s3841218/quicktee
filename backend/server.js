require("dotenv").config();
const express = require('express');
const res = require("express/lib/response");
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const products = require('./data/products.js')
connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

app.get("/", (req, res) => {
    res.send("quicktee")
})

app.get("/items", (req, res) => {
    
  res.json(products)
    
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
