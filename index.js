const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")


dotenv.config()

var routes = require('./routes/routes')
const app = express()

app.use(express.static('public'))

const port = process.env.PORT || 3000;
const connectionURL = process.env.DB_CONNECTION_STRING

mongoose.connect(connectionURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

app.listen(port,()=>{
    console.log("server is running on port "+port)
})

connection.once("open", ()=>{
    console.log("Connected to database!!....")
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(routes)