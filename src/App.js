import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import AddNote from './View/AddNote/AddNote';
import Home from './View/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" elements={<Home/>}/>
          <Route path="/addnote" elements={<AddNote/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
