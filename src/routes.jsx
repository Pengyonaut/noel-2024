import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Decode from './pages/Decode'; 
import Connemara from './pages/Connemara';
import Boustifaille from './pages/Boustifaille';
import RiddleTwo from './pages/RiddleTwo';
import RiddleThree from './pages/RiddleThree';
import Passey from './pages/Passey';
import "./App.css"


export default function AppRoutes() {
  return (
    <>
    <div className="spacer"></div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decode" element={<Decode />} />
      <Route path="/connemara" element={<Connemara />} />
      <Route path="/boustifaille" element={<Boustifaille />} />
      <Route path="/crane-luisant" element={<RiddleTwo />} />
      <Route path="/zzzzz" element={<RiddleThree />} />
      <Route path="/dans-le-passey" element={<Passey />} />





      
    </Routes>
    </>
  );
}
