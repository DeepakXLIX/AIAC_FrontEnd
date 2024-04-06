import HorizontalTL from 'components/LoanApplication/HorizontalTL'
import React from 'react'
import { Outlet} from 'react-router-dom'

function Layout1() {
    return (
        <div>
            <HorizontalTL />
            <Outlet />
        </div>
    )
}

export default Layout1