import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Login} from "./LoginComponent/Login"
import { NewAccount } from './NewAccountComponent/NewAccount'
import { HomePage } from './HomePage/HomePage'

export const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/NewAccount' element={<NewAccount></NewAccount>}></Route>
    <Route path='/Home/:id' element={<HomePage></HomePage>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
