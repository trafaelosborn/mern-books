import React from 'react';
import api from './Utils/api'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Saved from './Pages/Saved'
import Search from "./Pages/Search";
import Header from './Components/Header/Header'

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      googleBooks : [],
      keyword : ""
  }
  }
  
  handleInputChange = (event) => {
    const {name, value} = event.target
         this.setState({
             [name]: value
         })
     } 
 
     handleFormSubmit = (event) => {
      
          api.getGooglebooks(this.state.keyword).then((response) => {
              console.log(response)
             this.setState({googleBooks: response.data})
              console.log(this.state.googleBooks)
          })
     }

  render() {
  return (
  
 <Router>
   <div>
   <Header   keyword = {this.state.keyword} handleInputChange = {this.handleInputChange} handleFormSubmit = {this.handleFormSubmit}/>
     <Switch>
       <Route exact path = "/" render = {() => <Search keyword={this.state.keyword} googleBooks={this.state.googleBooks} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />} />
       <Route exact path = "/saved" component = {Saved}/>
     </Switch>
   </div>
 </Router>
  );
}
}

export default App;
