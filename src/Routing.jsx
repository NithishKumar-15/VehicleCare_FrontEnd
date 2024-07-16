import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Login} from "./LoginComponent/Login"
import { NewAccount } from './NewAccountComponent/NewAccount'

export const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/NewAccount' element={<NewAccount></NewAccount>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
