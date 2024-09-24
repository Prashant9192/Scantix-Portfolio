import React from 'react';
import '../css/Home.css'; // We'll create this file for custom styles

export default function Home() {
  return (
    <div className="home-page">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="welcome-text">WELCOME</h1>
            <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            <h2 className="mb-4">Do You Wanna Join Us?</h2>
            
            <button className="btn btn-light btn-lg mr-3">Get Started Now</button>
            <button className="btn btn-outline-light btn-lg">Learn More</button>
          </div>
        </div>
      </div>
      
      <div className="landscape">
        <div className="mountain"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="sun-moon"></div>
      </div>
      
      <footer className="footer">
        <p>designed by <img src="/freepik-logo.png" alt="Freepik" className="freepik-logo" /> freepik</p>
      </footer>
    </div>
  );
}