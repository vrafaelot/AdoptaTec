import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Albergue from './pages/Albergue';
import Adoptar from './pages/sumando-esfuerzos/Adoptar';
import Apadrinar from './pages/sumando-esfuerzos/Apadrinar';
import Donaciones from './pages/sumando-esfuerzos/Donaciones';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/albergue" element={<Albergue />} />
        <Route path="/adoptar" element={<Adoptar />} />
        <Route path="/apadrinar" element={<Apadrinar />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
    </Router>
  );
}

export default App;
