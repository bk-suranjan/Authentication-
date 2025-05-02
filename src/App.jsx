import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css'
import LoginPage from './components/LoginPage';
import {Routes,Route} from 'react-router-dom'


export const App = () => {
  return (
   <Routes>
    <Route path='/Login' element={<LoginPage/>}/>
   </Routes>
  )
}
