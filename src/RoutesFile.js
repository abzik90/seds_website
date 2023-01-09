import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cosmothon from './pages/Cosmothon';
import Rocketry from './pages/Rocketry';
import Rover from './pages/Cosmothon';
import Terms from './pages/Terms';
import Partners from './pages/Partners';
import Seds from './pages/Seds';


const RoutesFile = () => {
  return (
    <Routes>
      <Route exact path={'/seds'} element={<Seds/>}/>
      <Route exact path='/rover' element={<Rover/>}></Route>
      <Route exact path='/rocketry' element={<Rocketry/>}></Route>
      <Route exact path='/cosmothon' element={<Cosmothon/>}></Route>
      <Route exact path='/cosmothon/terms' element={<Terms/>}></Route>
      <Route exact path='/cosmothon/partners' element={<Partners/>}></Route>
    </Routes>
  );
}

export default RoutesFile;