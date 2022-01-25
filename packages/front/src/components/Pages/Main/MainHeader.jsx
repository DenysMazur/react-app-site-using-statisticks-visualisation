import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Typography, Button, CircularProgress } from '@mui/material'
import Image from 'material-ui-image'
import Rectangle from '../../../assets/rectangle-header.png'
import Mobile from '../../../assets/mobile.png'
import ContentContainer from '../../ContentContainer/ContentContainer'

const MainHeader = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const handleHomeButtonClick = () => {
    window.scrollTo({ top: 0 })
    navigate('/')
  }
  const handleNavigateStatisticsClick = () => {
    window.scrollTo({ top: 0 })
    navigate('statistics')
  }
  return (
    <Box
      sx={{
        backgroundImage: `url(${Rectangle})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: 'cover', md: '100% 100%' }
      }}
    >
      <ContentContainer>
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
        <Box
          sx={{
            color: theme.palette.common.white,
            display: 'flex',
            alignItems: { xs: 'center', md: 'flex-start' }
          }}
        >
          <Box sx={{ width: '50%', padding: { md: '20px 0 0', lg: '30px 0 0' } }}>
            <Box
              sx={{
                fontSize: { xs: '18px', md: '38px', lg: '48px' },
                marginBottom: { sm: '18px', lg: '24px' }
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: '18px', md: '38px', lg: '48px' }, fontWeight: 700 }}
              >
                Brainstorming
              </Typography>
              {' for desired perfect Usability'}
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '10px', md: '16px', lg: '20px' },
                marginBottom: { sm: '22px', lg: '32px' }
              }}
            >
              Our design projects are fresh and simple and will benefit your business greatly. Learn
              more about our work!
            </Typography>
            <Button
              color="neutral"
              sx={{
                color: theme.palette.primary.main,
                fontSize: { xs: '12px', lg: '16px' },
                padding: { xs: '4px 12px', md: '12px 22px', lg: '17px 32px' },
                textTransform: 'capitalize',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300]
                }
              }}
              onClick={handleNavigateStatisticsClick}
              variant="contained"
              disableElevation
            >
              Views Stats
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Image
              src={Mobile}
              style={{
                color: theme.palette.primary.main,
                objectFit: 'contain'
              }}
              color="inherit"
              imageStyle={{ display: 'block' }}
              loading={<CircularProgress color="inherit" />}
            />
          </Box>
        </Box>
      </ContentContainer>
    </Box>
  )
}

export default React.memo(MainHeader)
