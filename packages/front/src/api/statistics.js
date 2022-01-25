import axios from 'axios'

export const getStatistic = (page, size) =>
  axios.get(`/users?page=${page}&size=${size}`).then(response => response.data)

export const getUser = id => axios.get(`/users/user/${id}`).then(response => response.data)

export const getUserStatistic = (id, startDate, endDate) =>
  axios
    .post(`/users/user-statistics`, {
      id,
      startDate,
      endDate
    })
    .then(response => response.data)
