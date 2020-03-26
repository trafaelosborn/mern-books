import React, { Component } from 'react';
import ResultCard from '../ResultCard/ResultCard'
import Header from '../Header/Header'
export default class Container extends Component {

  constructor(props) {
    super()
    this.props = props
    console.log(this.props.keyword)
  }


  render() {
    return (
        <div className="container">
        
        {this.props.booksArray.map((book, index) => {
          let bookObject = {}
          if(book.volumeInfo){

          
        bookObject = {
          title : book.volumeInfo.title,
          authors : book.volumeInfo.authors[0],
          description : book.volumeInfo.description,
          link : book.volumeInfo.infoLink,
          image : book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
        }
        // debugger
     
      }
      else if (book.title){
        bookObject = {
          title : book.title,
          authors : book.authors,
          description : book.description,
          link : book.infoLink,
          image : book.image ? book.image.thumbnail : ""
        }
      }
      return(
        <ResultCard bookObject = {bookObject}/>
      )
  })}
        
        </div>
    )
  }
}