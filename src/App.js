import './App.css';
import React from 'react';
import {useState} from 'react';
import HeaderBar from './components/headerbar';
import  NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './api.js';
import { routes } from './util/routes.js';

function App() {
  const [isHeaderBar, setHeaderBar] = useState(true);

  return (
    <Router>
    <div className="App">
      {isHeaderBar ? <HeaderBar /> : <NavBar />}
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <div className='footer'></div>
    </div>
    </Router>
  )
}

export default App;
