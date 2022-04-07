import React, { useEffect } from 'react';
import { SignIn } from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />}/>
          <Route path='/Registration' element={<Registration />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
