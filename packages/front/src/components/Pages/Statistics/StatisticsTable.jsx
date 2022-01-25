import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { blue } from '@mui/material/colors'

const StyledTableCell = styled(TableCell)(({ theme }) => {
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: 16
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }
})

const StyledTableRow = styled(TableRow)(({ theme }) => {
  return {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: blue[100]
    },
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:nth-of-type(even):hover': {
      backgroundColor: blue[100]
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }
})

const StatisticsTable = ({ content }) => {
  const navigate = useNavigate()
  const handleNavigateUserClick = id => {
    window.scrollTo({ top: 0 })
    navigate(`/statistics/${id}`)
  }
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
      <Table sx={{ minWidth: 375 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">IP address</StyledTableCell>
            <StyledTableCell align="center">Total clicks</StyledTableCell>
            <StyledTableCell align="center">Total page views</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map(row => (
            <StyledTableRow key={row.id} onClick={() => handleNavigateUserClick(row.id)}>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.first_name}</StyledTableCell>
              <StyledTableCell align="center">{row.last_name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">{row.ip_address}</StyledTableCell>
              <StyledTableCell align="center">{row.statistic[0].total_clicks}</StyledTableCell>
              <StyledTableCell align="center">{row.statistic[0].total_page_views}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StatisticsTable
