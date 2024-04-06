import React from 'react'
import Header from '../HomePage/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout;