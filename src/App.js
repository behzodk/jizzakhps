import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import React, { useState } from 'react';
import { NotFound } from './routes/NotFound';
import Staff from './routes/Staff';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Service/>}/>
          <Route path='/library' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/staff' element={<Staff/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;