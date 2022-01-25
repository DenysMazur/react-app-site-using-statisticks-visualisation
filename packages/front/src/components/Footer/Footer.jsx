import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { AppBar, Button, Toolbar, Box } from '@mui/material'
import ContentContainer from '../ContentContainer/ContentContainer'

const Footer = ({ displayElem }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background: theme.palette.secondary.main
      }}
    >
      <ContentContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            color: theme.palette.common.white,
            fontSize: { xs: '10px', md: '16px' },
            padding: '14px 0',
            textAlign: 'center'
          }}
        >
          <Box sx={{ fontSize: '24px' }}>AppCo</Box>
          <Box>All rights reserved by ThemeTags</Box>
          <Box>Copyrights © 2019. </Box>
        </Box>
      </ContentContainer>
    </Box>
  )
}

export default Footer
