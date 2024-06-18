import React from 'react'
import UserList from '../../components/forms/UserTable'

const User = async () => {
  return (
    <div
      className="bg-image justify-content-end"
      style={{
        backgroundImage: "url('/images/bg10.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%'
      }}>
      <UserList />
    </div>
  )
}
export default User
