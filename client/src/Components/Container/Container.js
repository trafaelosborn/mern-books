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
        const bookObject = {
          title : book.volumeInfo.title,
          authors : book.volumeInfo.authors[0],
          description : book.volumeInfo.description,

          image : book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
        }
        // debugger
        return(
          <ResultCard bookObject = {bookObject}/>
        )
  })}
        
        </div>
    )
  }
}