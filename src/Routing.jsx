import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Login} from "./LoginComponent/Login"

export const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
