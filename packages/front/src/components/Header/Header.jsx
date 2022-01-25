import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { AppBar, Button, Toolbar } from '@mui/material'
import ContentContainer from '../ContentContainer/ContentContainer'

const Header = ({ displayElem }) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const handleHomeButtonClick = () => {
    window.scrollTo({ top: 0 })
    navigate('/')
  }
  return (
    <AppBar
      sx={{
        boxShadow: 0,
        background: theme.palette.primary.main,
        display: displayElem ? 'block' : 'none'
      }}
    >
      <ContentContainer>
        <Toolbar disableGutters>
          <Button
            onClick={handleHomeButtonClick}
            sx={{
              textTransform: 'capitalize',
              color: theme.palette.common.white,
              fontSize: 40,
              fontWeight: 400,
              padding: 0
            }}
          >
            AppCo
          </Button>
        </Toolbar>
      </ContentContainer>
    </AppBar>
  )
}

export default Header
