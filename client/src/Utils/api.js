import axios from "axios"

export default {
    getGooglebooks: function(keyword) {
        return axios.get("/api/googlebooks/" + keyword)
    }
}