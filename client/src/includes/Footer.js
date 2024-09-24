import React from 'react';
import "../css/Footer.css"
export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <img 
              src="/scantixLogo4x4.webp" 
              alt="Scantix Logo" 
              className="mb-3"
              style={{ width: '80px', height: '80px' }}
            />
            <p className="text-cyan">
              Innovating the future through cutting-edge technology solutions.
            </p>
            <div className="mt-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-cyan me-3 text-decoration-none social-icon">
                  <i className={`bi bi-${social.toLowerCase()}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3 text-cyan">Quick Links</h5>
            <ul className="list-unstyled">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-light text-decoration-none hover-cyan">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-3 text-cyan">Stay Updated</h5>
            <p className="text-light">Subscribe to our newsletter for the latest updates.</p>
            <form className="input-group">
              <input 
                type="email" 
                className="form-control bg-dark text-light border-cyan"
                placeholder="Your email"
                aria-label="Your email"
              />
              <button className="btn btn-cyan" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        
        <hr className="my-4 bg-cyan" />
        
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-light mb-0">&copy; {new Date().getFullYear()} Scantix. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-light text-decoration-none me-3 hover-cyan">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none hover-cyan">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}