const express = require('express');
const app = express()
const mongoose = require('mongoose');
require("dotenv").config()
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT)
const mongoString = process.env.DATABASE_URL
const router = require("./routes/index")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended : true
}))

mongoose.connect(mongoString).then(()=>{
  console.log("Database Connected");
}).catch((err)=>{
  console.log(err);
})

app.use("/api", router)

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})
