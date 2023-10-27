import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home';
import { TopNav } from './common/components/topNav';


function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <div id="mainContent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<HomePage />} />
            <Route path="/resume" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
