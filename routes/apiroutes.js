const axios = require("axios")

function apiroutes(app){
    app.get("/api/googlebooks/:searchTerm", function(req, res){
        const searchTerm = req.params.searchTerm
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm).then(function(response){
            res.json(response.data.items)
        })
    })
    
}
 module.exports = apiroutes