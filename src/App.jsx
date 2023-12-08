import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './layout';
import * as Pages from './pages'
import './App.css'

const App = () => {
  return (
    <div className="App">
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.Home />} />
        <Route path="/Lunay" element={<Pages.Lunay />} />
        <Route path="/JustinQuiles" element={<Pages.JustinQuiles />} />
        <Route path="/Feid" element={<Pages.Feid />} />
        <Route path="*" element={<Pages.NotFound />} />
      </Route>
    </Routes>
  </div>
  )
}

export default App
