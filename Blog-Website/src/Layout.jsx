import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
function Layout() {
  return (
    <>
   <div className="dark:bg-slate-900">
   <Header/>
   <Outlet />
   <Footer/>
   </div>
    </>
  )
}

export default Layout