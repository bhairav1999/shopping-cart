import React from 'react'
import Hedear from '../components/navbar/Hedear'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
    <Hedear/>
    <Outlet/>
    </>
  )
}

export default Layouts