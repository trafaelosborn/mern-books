import React, { Component } from "react"
import Container from '../Components/Container/Container'
import api from "../Utils/api"
function Search(props)  {
     
    const {googleBooks, keyword, handleInputChange, handleFormSubmit} = props
        return(
            <Container  booksArray = {googleBooks}   keyword = {keyword}    handleInputChange = {handleInputChange} handleFormSubmit = {handleFormSubmit} />
        )
    
}

export default Search