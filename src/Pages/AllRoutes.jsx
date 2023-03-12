import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import PageNotFound from './PageNotFound/PageNotFound'
import PrivateRoute from './PrivateRoute/PrivateRoute'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={ <PrivateRoute> <Home/> </PrivateRoute> }/>
        <Route path='/' element={ <PrivateRoute> <Home/> </PrivateRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoutes