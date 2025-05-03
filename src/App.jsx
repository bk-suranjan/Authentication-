import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css'
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import ForgetPage from './components/ForgetPage';

import {Routes,Route} from 'react-router-dom'
import OTP from './components/OTP';


export const App = () => {
  return (
   <Routes>
    <Route path='/Login' element={<LoginPage/>}/>
    <Route path='/signUP' element={<SignUp/>}/>
    <Route path='/password/forgot' element={<ForgetPage />} />
    <Route path="/otp" element={<OTP />} />
   </Routes>
  )
}
