import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Toolbar, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const BreadcrumbsComponent = ({ user }) => {
  const [isUser, setIsUser] = useState(false)
  useEffect(() => {
    if (user !== undefined) {
      setIsUser(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  const location = useLocation()
  const createBreadcrumbs = () => {
    const path = location.pathname.split('/')
    return path.map((element, index) => {
      if (index === 0) {
        return (
          <Link
            underline="hover"
            key="Main page"
            sx={{
              textTransform: 'capitalize'
            }}
            component={RouterLink}
            to="/"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Main page
          </Link>
        )
      }
      if (index === path.length - 1) {
        return (
          <Typography color="text.primary" key={element} sx={{ textTransform: 'capitalize' }}>
            {isUser ? `${user.first_name} ${user.last_name}` : `${element}`}
          </Typography>
        )
      }
      const currentPath = path.slice(0, index + 1).join('/')
      return (
        <Link
          underline="hover"
          key={element}
          component={RouterLink}
          to={`${currentPath}`}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {element}
        </Link>
      )
    })
  }
  return (
    <Toolbar sx={{ '&.MuiToolbar-root': { padding: 0 } }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ textTransform: 'capitalize' }}
      >
        {createBreadcrumbs()}
      </Breadcrumbs>
    </Toolbar>
  )
}

export default React.memo(BreadcrumbsComponent)
