import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Main from '../Pages/Main/Main'

const App = () => {
  const a = ''
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}

export default React.memo(App)
