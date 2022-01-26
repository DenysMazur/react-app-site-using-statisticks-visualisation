import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Box from '@mui/material/Box'
import { Button, InputAdornment, TextField } from '@mui/material'
import Rectangle from '../../../assets/rectangle-footer.png'
import ContentContainer from '../../ContentContainer/ContentContainer'

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required.')
})

const MainFooter = () => {
  const theme = useTheme()
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: FORM_VALIDATION,
    onSubmit: async value => {
      console.log(value)
    }
  })
  return (
    <Box
      sx={{
        backgroundImage: `url(${Rectangle})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: 'cover', md: '100% 100%' }
      }}
    >
      <ContentContainer>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    aria-label="subscribe"
                    edge="end"
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: 16,
                      padding: '15px 42px',
                      borderRadius: '8px'
                    }}
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              )
            }}
            sx={{
              maxWidth: '580px',
              margin: '0 auto',
              '& .MuiOutlinedInput-root': {
                padding: '4px 4px',
                backgroundColor: theme.palette.common.white,
                borderRadius: '10px',
                '&:hover fieldset': { borderColor: theme.palette.primary.main }
              },
              '& .MuiFormLabel-asterisk': {
                color: theme.palette.error.main
              },
              '&.MuiFormControl-root': { display: 'block', padding: '30px 0 0' }
            }}
          />
        </form>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            color: theme.palette.common.white,
            fontSize: { xs: '10px', md: '16px' },
            padding: '24px 0 30px',
            textAlign: 'center'
          }}
        >
          <Box sx={{ fontSize: { xs: '24px', md: '39px' } }}>AppCo</Box>
          <Box>All rights reserved by ThemeTags</Box>
          <Box>Copyrights © 2019. </Box>
        </Box>
      </ContentContainer>
    </Box>
  )
}

export default React.memo(MainFooter)
