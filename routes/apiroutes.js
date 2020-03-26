const db = require ("../models")

const axios = require("axios")

function apiroutes(app){
    app.get("/api/googlebooks/:searchTerm", function(req, res){
        const searchTerm = req.params.searchTerm
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm).then(function(response){
            res.json(response.data.items)
        })
    })
    
    app.post("/api/savebook", function(req, res){
        console.log(req.body)
        console.log(db.Book)
        db.Book.create(req.body).then(function(result){
            res.json(result)
        }) 
    })
    app.get("/api/savedbooks", function(req, res){
        db.Book.find({}).then(function(result){
            res.json(result)
        })
    })
}
 module.exports = apiroutes