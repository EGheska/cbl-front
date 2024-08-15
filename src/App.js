import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {routes} from './util/routes.js';
import Layout from './components/layout'; // Import the new Layout component
import {useState} from 'react';

function App() {
    // Items for linker to render a page
    const [items, setItems] = useState([
        {type: "about", name: "Spiderweb Framework"},
        {type: "cbl", name: "Community-Based Learning"},
        {type: "cbl-in-others", name: "ComBL in Other Universities"},
        {type: "cbl-toolkit", name: "ComBL Toolkit"},
        {type: "results", name: "Results"},
        // {type: "cbl-toolkit", name: "ComBL Toolkit"},
    ]);
    return (
        <Router>
            <div className="App">
                <Layout items={items}/>
                <Routes>
                    {routes.map(({path, Component}, index) => (
                        <Route key={index} path={path} element={<Component items={items}/>}/>
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
