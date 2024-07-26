import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './util/routes.js';
import Layout from './components/layout'; // Import the new Layout component

function App() {
  return (
      <Router>
        <div className="App">
          <Layout />
          <Routes>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
