import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material'

const Layout = () => (
  <Container maxWidth="xl">
    <Outlet />
  </Container>
)

export default React.memo(Layout)
