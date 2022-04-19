import React, { useEffect } from 'react';
import { SignIn } from "./pages/SignIn";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Registration } from './pages/Registration';
import Menu from './pages/Menu';
import Table from './components/Table';
import Extra from './components/Extra';
import ApproveCashIn from './modals/ApproveCashIn';
import DenyCashIn from './modals/DenyCashIn';

const App = () => {  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />}/>
          <Route path='/Registration' element={<Registration />}/>
          <Route path='/Menu' element={<Menu />}>
            <Route path='table'  element={<Table />}/>
            <Route path='extra'  element={<Extra />}>
              <Route path='approve'  element={<ApproveCashIn />}/>
              <Route path='deny'  element={<DenyCashIn />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
