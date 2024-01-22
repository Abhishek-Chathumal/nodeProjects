const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

var routes = require('./routes/routes')
const app = express()

const port = 3000;
const connectionURL = "mongodb+srv://acwellage:4MMej3lxli8YRxmF@cluster0.bkmyggo.mongodb.net/testDB?retryWrites=true&w=majority"

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

app.use(bodyParser.json())
app.use(routes)