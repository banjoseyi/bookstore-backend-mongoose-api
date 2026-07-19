const express = require("express");
require("dotenv").config();
const PORT = 3000;
const bookRoutes = require("./routes/bookRoutes"); 



const app = express();
app.use(express.json());



app.listen(3000, () => { console.log("app listening on port 3000"); })
