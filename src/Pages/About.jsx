import React, { Component } from "react";
import "./About.css";
import MainLayout from "../Components/MainLayout";

export default class About extends Component {
  render() {
    return (
      <MainLayout>
        <p className="about__description">
          We imagine the future of cities to be smart and green. Our idea is
          simple and has a lot of potential:
          <ul>
            <li>
              A smart city runs an Aja instance and adds public green spaces to
              the database
            </li>
            <li>
              For ease of use the green spaces gat a QR code with a deep link to
              the their digital twins on Aja
            </li>
            <li>
              Now citicens can sign up, scan a green area they would like to
              take care of and "adopt" it
            </li>
          </ul>
          Aja aims to
          <ul>
            <li>Bring the comunity closer together</li>
            <li>Give everyone the opportinuty to engage with their city</li>
            <li>Raise the quality of live in cities</li>
          </ul>
        </p>
        <div className="about__featuresBox">
          <i class="fas fa-city fa-5x"></i>
          <h5 className="about__feature">Join your city</h5>
          <i class="fab fa-pagelines fa-5x"></i>
          <h5 className="about__feature">Take care of a garden</h5>
          <i class="fas fa-handshake fa-5x"></i>
          <h5 className="about__feature">Be part of the community</h5>
          <i class="fas fa-heartbeat fa-5x"></i>
          <h5 className="about__feature">Increase everyones quality of live</h5>
        </div>
      </MainLayout>
    );
  }
}
