import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import CleanDesign from '../../../assets/cleanDesignImg.png'
import RetinaReady from '../../../assets/retinaReadyImg.png'
import SecureData from '../../../assets/secureDataImg.png'
import ContentContainer from '../../ContentContainer/ContentContainer'

const MainContent = () => {
  const theme = useTheme()
  return (
    <ContentContainer>
      <Typography
        variant="h4"
        sx={{
          maxWidth: '530px',
          width: '100%',
          margin: '0 auto',
          fontSize: { xs: '28px', lg: '32px' },
          color: theme.text.primary,
          textAlign: 'center',
          marginBottom: { xs: '12px', lg: '24px' },
          marginTop: { xs: '12px', lg: '0px' }
        }}
      >
        {'Why '}
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, fontSize: { xs: '28px', lg: '32px' }, color: theme.text.primary }}
        >
          small business owners love
        </Typography>
        {' AppCo?'}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: '720px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
          fontSize: { xs: '14px', lg: '20px' },
          color: theme.text.secondary,
          marginBottom: { xs: '20px', lg: '40px' }
        }}
      >
        Our design projects are fresh and simple and will benefit your business greatly. Learn more
        about our work!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '15px',
          marginBottom: { xs: '20px', sm: '30px', md: '154px' },
          '& .MuiCard-root': { borderRadius: '32px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)' }
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            width: '100%'
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="96px"
              image={CleanDesign}
              alt="Clean Design image"
              sx={{ '&.MuiCardMedia-img': { padding: '48px 0 30px', objectFit: 'contain' } }}
            />
            <CardContent
              sx={{
                textAlign: 'center',
                paddingBottom: '48px',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}
            >
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                Clean Design
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Increase sales by showing true dynamics of your website.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 380,
            width: '100%'
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="96px"
              image={SecureData}
              alt="Secure Data image"
              sx={{ '&.MuiCardMedia-img': { padding: '48px 0 30px', objectFit: 'contain' } }}
            />
            <CardContent
              sx={{
                textAlign: 'center',
                paddingBottom: '48px',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}
            >
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                Secure Data
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Build your online store’s trust using Social Proof & Urgency.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 380,
            width: '100%'
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="96px"
              image={RetinaReady}
              alt="Retina Ready image"
              sx={{ '&.MuiCardMedia-img': { padding: '48px 0 30px', objectFit: 'contain' } }}
            />
            <CardContent
              sx={{
                textAlign: 'center',
                paddingBottom: '48px',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}
            >
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                Retina Ready
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Realize importance of social proof in customer’s purchase decision.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </ContentContainer>
  )
}

export default React.memo(MainContent)
