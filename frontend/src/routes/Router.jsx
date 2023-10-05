import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignLandingPage from '../pages/auth/SignLandingPage'
import { CreateAccount, Signin, Signup } from '../components'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignLandingPage/>}>
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/create-account' element={<CreateAccount/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router