import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A80BA'
    },
    secondary: {
      main: '#1C3B55'
    },
    neutral: {
      main: '#FFFFFF'
    }
  },
  text: {
    primary: '#1A1A1A',
    secondary: '#7E7E7E'
  },
  typography: {
    fontFamily: 'Montserrat'
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body2: 'span'
        }
      }
    }
  }
})

export default theme
