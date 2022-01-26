import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { Typography, Pagination } from '@mui/material'
import BreadcrumbsComponent from '../../BreadcrumbsComponent/BreadcrumbsComponent'
import ContentContainer from '../../ContentContainer/ContentContainer'
import StatisticsTable from './StatisticsTable'
import { getStatistic } from '../../../api/statistics'

const Statistics = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [queryParams, setQueryParams] = useState({ page: 1, size: 50 })
  const [result, setResult] = useState({ content: [], totalPages: 0 })
  const theme = useTheme()
  useEffect(() => {
    if (![...searchParams].length) {
      setSearchParams(queryParams)
    }
    async function fetchData() {
      const page = searchParams.get('page')
      const size = searchParams.get('size')
      const data = await getStatistic(page, size)
      setResult(data)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])
  const handleChange = (event, value) => {
    window.scrollTo({ top: 0 })
    const currentParams = Object.fromEntries([...searchParams])
    setSearchParams({ page: value, size: currentParams.size })
  }
  return (
    <ContentContainer>
      <BreadcrumbsComponent />
      <Typography
        variant="h2"
        sx={{ color: theme.text.primary, fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}
      >
        Users statistics
      </Typography>
      <StatisticsTable content={result.content} />
      <Pagination
        variant="outlined"
        shape="rounded"
        page={[...searchParams].length ? parseInt(searchParams.get('page'), 10) : queryParams.page}
        count={result.totalPages}
        onChange={handleChange}
        sx={{
          margin: '24px 0',
          '& .MuiPagination-ul': { justifyContent: 'center' },
          '& .MuiButtonBase-root.Mui-selected': {
            background: theme.palette.primary.main,
            color: theme.palette.common.white
          }
        }}
      />
    </ContentContainer>
  )
}

export default React.memo(Statistics)
