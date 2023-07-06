import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet,
} from 'react-router-dom';
import Users from './components/Users';
import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Users />} />
      </Route>,
    ),
  );
  return (
    <div className="body">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => (
  <>
    <nav className="navbar">
      <h1 className="navbar-title">Try to connect React & Redux app to API</h1>
      <ul className="navbar-list">
        <li><Link to="/users" className="navbar-item">Users</Link></li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);

export default App;
