import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Users from './components/Users';
import Data from './components/Data';
import './App.css';

const App = () => (
  <div className="body">
    <Router>
      <nav className="navbar">
        <h1 className="navbar-title">Try to connect React & Redux app to API</h1>
        <ul className="navbar-list">
          <li>
            <Link to="/users" className="navbar-item">
              Users
            </Link>
          </li>
          <li>
            <Link to="/data" className="navbar-item">
              Data
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  </div>
);

export default App;
