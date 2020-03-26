import React, { Component } from 'react';
import './Header.css'
import {Link} from "react-router-dom";
export default class Header extends Component {

  constructor(props) {
    super()
    this.props = props
    console.log(this.props.keyword)
  }


  render() {
    return (
<div className="header">
<nav>
    <div class="nav-wrapper">
    <Link to="/">Home</Link>
      <Link to="/saved">Saved</Link>
      <a href="#" class="brand-logo"><i class="material-icons">book</i>Book Search</a>
      
      <input type="text" value={this.props.keyword}   onChange={this.props.handleInputChange}  name="keyword" id="searchInput"></input>
      
      <ul class="right hide-on-med-and-down">
        <li><a  onClick={this.props.handleFormSubmit}><i class="material-icons">search</i></a></li>       
      </ul>
      
    </div>
  </nav>
      </div>
    )
  }
}

