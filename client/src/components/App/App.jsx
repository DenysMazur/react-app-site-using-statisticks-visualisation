import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Main from '../Pages/Main/Main'
import Statistics from '../Pages/Statistics/Statistics'
import User from '../Pages/User/User'

const App = () => {
  const a = ''
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="/statistics/:user" element={<User />} />
      </Route>
    </Routes>
  )
}

export default React.memo(App)
