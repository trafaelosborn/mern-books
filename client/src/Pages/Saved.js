import React, { Component, useEffect, useState } from "react"
import Container from '../Components/Container/Container'
import api from "../Utils/api"


function Saved(props)  {
    const [booksArray, setbooksArray] = useState([])
    useEffect(() => {
        api.getAllBooks().then(function(Books){
            console.log(Books.data)
            setbooksArray(Books.data)
            // console.log(booksArray)
        })
    }, [])
    const {googleBooks, keyword, handleInputChange, handleFormSubmit} = props
        return(
            <Container booksArray={booksArray}/>
            
        )
    
}

export default Saved