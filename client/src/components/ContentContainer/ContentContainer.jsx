import React from 'react'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'

const RootContainer = styled(Container)(({ theme }) => {
  return {
    [theme.breakpoints.up('xs')]: {
      padding: '0 15px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 80px'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 130px'
    }
  }
})
const ContentContainer = ({ children, ...props }) => (
  <RootContainer {...props} disableGutters maxWidth="xl">
    {children}
  </RootContainer>
)

export default React.memo(ContentContainer)
