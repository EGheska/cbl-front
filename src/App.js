import './App.css';
import HeaderBar from './components/headerbar';
import  NavBar from './components/navbar';
import './api.js';

const headerBarSellection = 1;
function App() {

  if (headerBarSellection === 0) {
    return (
      <HeaderBar />
    );
  } else {
    return (
        <NavBar />
    );
  }
}

export default App;
