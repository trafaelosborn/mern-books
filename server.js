const express = require("express");
const app = express()
const mongoose = require("mongoose");
const routes = require("./routes/apiroutes");
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended : true}))
app.use(express.json())

app.use(express.static("public"))

routes(app)
// Add routes, both API and view

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksDB")
// Connect to the Mongo DB
app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
})

// Start the API server
