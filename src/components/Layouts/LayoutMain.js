import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import React from 'react'
import { Outlet } from 'react-router-dom'
function LayoutMain() {
  return (
    <div>
      <ScrollToTop />
      <Outlet />
    </div>
  )
}

export default LayoutMain