import React, { useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import './users.css'
import { fetchUsers, processUsers } from '../lib/api'

const Users = () => {
  const [usersByMonth, setUsersByMonth] = useState([])

  useEffect(() => {
    async function getUsers() {
      setUsersByMonth(await fetchUsers().then((users) => processUsers(users)))
    }
    getUsers()
  }, [])

  return (
    <div className="months">
      {usersByMonth.map((month) => {
        return (
          <div key={month.month}>
            <div className="month" style={{ color: month.color }}>
              <span data-tip data-for={month.month}>
                {month.month}
              </span>
            </div>
            <ReactTooltip id={month.month} place="bottom" effect="solid">
              {month.users.map((user) => {
                return (
                  <div key={user.id}>
                    {user.firstName} {user.lastName}
                  </div>
                )
              })}
            </ReactTooltip>
          </div>
        )
      })}
    </div>
  )
}

export default Users
