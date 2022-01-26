import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Toolbar } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  const location = useLocation()
  const [displayElems, setDisplayElems] = useState(false)
  useEffect(() => {
    if (location.pathname !== '/') {
      setDisplayElems(true)
      return null
    }
    setDisplayElems(false)
    return null
  }, [location])
  return (
    <>
      <Header displayElem={displayElems} />
      <Toolbar
        sx={{
          '&.MuiToolbar-root': { minHeight: '71px' },
          display: displayElems ? 'block' : 'none'
        }}
      />
      <Outlet />
      <Footer displayElem={displayElems} />
    </>
  )
}

export default React.memo(Layout)
