import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'January'
  },
  {
    name: 'February'
  },
  {
    name: 'March'
  },
  {
    name: 'April'
  },
  {
    name: 'May'
  }
]
const UserChart = ({ userData }) => {
  const [usersStatistic, setUsersStatistic] = useState()
  const [isUsersStatistic, setIsUsersStatistic] = useState(false)
  useEffect(() => {
    if (userData === undefined || userData === '') {
      setUsersStatistic(data)
      setIsUsersStatistic(false)
      return null
    }
    setUsersStatistic(userData.statistic)
    setIsUsersStatistic(true)
    return null
  }, [userData])
  return (
    <ResponsiveContainer width="100%" height="100%">
      {isUsersStatistic ? (
        <LineChart
          width={500}
          height={300}
          data={usersStatistic}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line name="User Page Views" type="monotone" dataKey="page_views" stroke="#8884d8" />
          <Line name="User Clicks" type="monotone" dataKey="clicks" stroke="#82ca9d" />
        </LineChart>
      ) : (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="No data" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      )}
    </ResponsiveContainer>
  )
}

export default UserChart
