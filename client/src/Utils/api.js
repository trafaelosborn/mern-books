import axios from "axios"

export default {
    getGooglebooks: function(keyword) {
        return axios.get("/api/googlebooks/" + keyword)
    },
    saveBook: function(Book) {
        return axios.post("/api/savebook", Book)
    },
    getAllBooks: function() {
        return axios.get("/api/savedbooks")
    }
}