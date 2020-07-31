import axios from 'axios'

export async function fetchUsers() {
  try {
    const API_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    const res = await axios.get(API_URL)
    return res.data
  } catch (e) {
    console.log(e)
    return []
  }
}

export async function processUsers(users) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return users
    .reduce((acc, rec) => {
      const monthIndex = parseInt(rec.dob.slice(5, 7), 10) - 1
      if (!acc[monthIndex]) {
        acc[monthIndex] = { count: 1, users: [rec], month: months[monthIndex] }
      } else {
        acc[monthIndex].count += 1
        acc[monthIndex].users.push(rec)
      }
      return acc
    }, new Array(12))
    .map((usersByMonth) => {
      let color = ''
      if (usersByMonth.count < 3) {
        color = 'gray'
      } else if (usersByMonth.count < 7) {
        color = 'blue'
      } else if (usersByMonth.count < 11) {
        color = 'green'
      } else {
        color = 'red'
      }
      return { ...usersByMonth, color }
    })
}
