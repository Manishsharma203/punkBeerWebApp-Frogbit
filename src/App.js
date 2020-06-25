import React, { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <Link to="/"><div className='h3 text-bold text-white'>Navbar</div></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active mx-4">
              <Link className='text-white' to="/">Home</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className='text-white' to="/favourites">Favourites</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes/>
    </div>
  )
}

export default App
