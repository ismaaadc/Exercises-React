import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/Navbar'

export const DashboardLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}
