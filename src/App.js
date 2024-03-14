import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch

import LoginForm from './components/LoginForm';
import JokesPage from './components/JokesPage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Home/>} /> 
          <Route path="/login" element={<LoginForm />} /> {/* Use "element" prop instead of "component" */}
          <Route path="/jokes" element={<JokesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;