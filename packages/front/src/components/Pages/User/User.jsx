import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Backdrop,
  DialogActions
} from '@mui/material'
import BreadcrumbsComponent from '../../BreadcrumbsComponent/BreadcrumbsComponent'
import ContentContainer from '../../ContentContainer/ContentContainer'
import { getUser, getUserStatistic } from '../../../api/statistics'
import 'react-datepicker/dist/react-datepicker.css'
import UserChart from './UserChart'

const User = () => {
  const params = useParams()
  const theme = useTheme()
  const [user, setUser] = useState()
  const [message, setMessage] = useState('')
  const [isOpenedDialog, setIsOpenedDialog] = useState(false)
  const [dateRange, setDateRange] = useState([
    new Date().setDate(new Date().getDate() - 7),
    new Date()
  ])
  const [startDateFromRange, endDateFromRange] = dateRange
  const [result, setResult] = useState()
  useEffect(() => {
    async function fetchData() {
      const data = await getUser(params.user)
      setUser(data)
      try {
        const response = await getUserStatistic(data.id, startDateFromRange, endDateFromRange)
        setResult(response)
      } catch (error) {
        setResult('')
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const receveDataClick = async () => {
    const [startDate, endDate] = dateRange
    if (endDate === null) {
      setMessage('Fill the end date of range')
      setIsOpenedDialog(true)
      return null
    }
    try {
      const data = await getUserStatistic(user.id, startDate, endDate)
      setResult(data)
    } catch (error) {
      setMessage('No such data. Change the range of date')
      setIsOpenedDialog(true)
      setResult('')
    }
    return null
  }
  const hadleUpdateData = update => {
    setDateRange(update)
  }
  const handleClose = () => {
    setMessage('')
    setIsOpenedDialog(false)
  }
  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (isOpenedDialog) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [isOpenedDialog])
  return (
    <ContentContainer>
      <BreadcrumbsComponent user={user} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          marginBottom: '16px',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            color: theme.text.primary,
            fontSize: '32px',
            fontWeight: 700,
            flexGrow: 1
          }}
        >
          {user !== undefined ? `${user.first_name} ${user.last_name}` : 'none'}
        </Box>
        <Box sx={{ padding: '7px 5px 5px' }}>
          <DatePicker
            selectsRange
            dateFormat="MMM d, yyyy"
            startDate={startDateFromRange}
            endDate={endDateFromRange}
            onChange={hadleUpdateData}
            monthsShown={2}
          />
        </Box>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disableElevation
          onClick={receveDataClick}
        >
          Receive Data
        </Button>
      </Box>
      <Box sx={{ height: '500px' }}>
        <UserChart userData={result} />
      </Box>
      <Dialog
        open={isOpenedDialog}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <DialogContent>
          <DialogContentText id="dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </ContentContainer>
  )
}

export default React.memo(User)
