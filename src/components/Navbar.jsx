import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarTogglerDemo01" 
            aria-controls="navbarTogglerDemo01" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-white" href="#">Online Recipe Frontend</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Contact us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Sign up</a>
              </li>
            </ul>
            <div>
              <a className="text-white bg-success p-2 rounded" href="/login">Login</a> / 
              <a className="text-white bg-info p-2 rounded ms-2" href="/register">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
