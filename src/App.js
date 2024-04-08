import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import ExecuteCommand from './ExecuteCommand';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/command" element={<ExecuteCommand/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
