import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './layout';
import ProtectedRouted from './routes'
import { AuthProvider } from './contexts'
import { Effect } from './components';
import * as Pages from './pages'
import './App.css'

const App = () => {
  return (
    
    <div className="App">
    {/* <NavBar /> */}
    { /*<Effect /> */}
    <AuthProvider>
    <Routes>
        <Route path="/" element={<ProtectedRouted redirectTo="/login" />}>
          
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          </Route>
        
        
        </Route>
     <Route path="/login" element={<Pages.Login />} />
         <Route path="/" element={<NavBar />}>
         
          <Route path="/Lunay" element={<Pages.Lunay />} />
          <Route path="/JustinQuiles" element={<Pages.JustinQuiles />} />
          <Route path="/Feid" element={<Pages.Feid />} />
          <Route path="*" element={<Pages.NotFound />} />
          
        </Route>
       

    </Routes>
    </AuthProvider>
  </div>
  )
}

export default App
