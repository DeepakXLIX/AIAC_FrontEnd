import React from 'react'
import {Outlet} from 'react-router-dom'
function LayoutMain() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default LayoutMain