import React, { Component } from 'react';
import './ResultCard.css'

export default class ResultCard extends Component {

  constructor(props) {
    super()
    this.props = props
    
   
  }

  
  
  render() {
    return (
        <div>
<div className="col s12 m7">
    <h2 className="header">{this.props.bookObject.title}</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img className="book-image" src={this.props.bookObject.image} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h5>{this.props.bookObject.author}</h5>
          <p>{this.props.bookObject.description}</p>
        </div>
        <div className="card-action">
          <button className="btn">View Book</button>
          <button className="btn">Save Book</button>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
  }
}
