import React from 'react'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainFooter from './MainFooter'

const Main = () => (
  <>
    <MainHeader />
    <MainContent />
    <MainFooter />
  </>
)

export default React.memo(Main)
