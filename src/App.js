import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {routes} from './util/routes.js';
import Layout from './components/layout'; // Import the new Layout component
import {useState} from 'react';

function App() {
    const [items, setItems] = useState([
        {type: "about", name: "Spiderweb Framework"},
        {type: "cbl", name: "Community-Based Learning"},
        {type: "cbl-in-others", name: "ComBL in Other Universities"},
    ]);
    return (
        <Router>
            <div className="App">
                <Layout items={items}/>
                <Routes>
                    {routes.map(({path, Component}) => (
                        <Route key={path} path={path} element={<Component items={items}/>}/>
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
