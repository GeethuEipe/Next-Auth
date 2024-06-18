'use client'

import React, { useEffect, useState } from 'react'

const UserTable = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/userslist')
      const data = await response.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  console.log('users', users)

  return (
    <div className="container content">
      <table className="user-table">
        <thead>
          {/* <h1>List User Data</h1> */}
          <tr>
            <th>username</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .content {
          max-width: 1000px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 auto;
        }
        .user-table th,
        .user-table td {
          padding: 12px 15px;
          border: 1px solid #ddd;
          text-align: left;
        }
        .user-table th {
          background-color: #007bff;
          color: white;
        }
        .user-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .user-table tr:hover {
          background-color: #e9e9e9;
        }
      `}</style>
    </div>
  )
}
export default UserTable
