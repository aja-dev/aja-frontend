import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__box">
          <p>Aja</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
        <div className="footer__rowBox">
          <p>Follow us on</p>
          <p><i className="fab fa-facebook-square"></i></p>
          <p><i className="fab fa-twitter-square"></i></p>
          <p><i className="fab fa-instagram"></i></p>
        </div>
        <div className="footer__box">
          <p>Contact</p>
          <p><Link to="/about">About Aja</Link></p>
        </div>
      </div>
    )
  }
}
