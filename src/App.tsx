import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register, Storage } from './pages';

import './index.scss';

function App() {
  return (
      <Routes>
        {/*<Route path='*' element={<NotFound />} />*/}
        <Route path='/' element={<Storage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
  );
}

export default App;
