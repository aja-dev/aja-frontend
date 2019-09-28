import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showBurger: "none"
    }

    this.toggleBurger = this.toggleBurger.bind(this);
  }

  toggleBurger() {
    (this.state.showBurger === "none") 
    ? 
      this.setState({ showBurger: "flex"}) 
    : 
      this.setState({ showBurger: "none"})  
  }

  render() {
    return (
      <>
        <div className="navbar">
          <Link to="/" className="navbar__icon"><i className="fab fa-pagelines fa-2x"></i></Link>
          <i className="fas fa-bars fa-2x navbar__icon" onClick={this.toggleBurger}></i>        
        </div>  
        <div className="navbar__burgerBox" style={{display: this.state.showBurger}}>
          <Link to="/login" className="navbar__link">Login</Link>
          <Link to="/signup" className="navbar__link">SignUp</Link>
          <Link to="/about" className="navbar__link">About</Link>
        </div>
      </>
    )
  }
}
