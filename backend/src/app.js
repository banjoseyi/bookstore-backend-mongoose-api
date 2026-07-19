const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database"); 
const bookRoutes = require("./routes/bookRoutes"); 

const app = express();
app.use(express.json());


connectDB(); 

app.use("/books", bookRoutes);

app.listen(3000, () => { console.log("app listening on port 3000"); });