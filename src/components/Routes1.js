import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Results from './Results'
import Navbar from './Navbar';

const Routes1 = () => {
  return (
    <div className='p-4'>
    <Routes>
    <Route exact path ='/' element = {<Navbar/>}>
        </Route>
        <Route exact path ='/search' element = {<Results />}>
        </Route>
    </Routes>
    </div>
  )
}

export default Routes1;