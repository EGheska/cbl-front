import './App.css';
import React from 'react';
import {useState} from 'react';
import HeaderBar from './components/headerbar';
import  NavBar from './components/navbar';
import TitleScreen from './pages/titlescreen.js';
import './api.js';

const headerBarSellection = 0;
function App() {
  const [isHeaderBar, setHeaderBar] = useState(true);

  return (
    <div className="App">
      {isHeaderBar ? <HeaderBar /> : <NavBar />}
      <TitleScreen />
      <div className='footer'></div>
    </div>
  )
}

export default App;
