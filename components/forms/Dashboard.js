'use client'

import { useEffect, useState } from 'react'

import { IoHomeOutline } from 'react-icons/io5'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { LuMessageSquare } from 'react-icons/lu'
import { MdOutlineSettings } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter()
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token')
      const storedUsername = localStorage.getItem('username')
      setToken(storedToken)
      setUsername(storedUsername)

      if (!storedToken || !storedUsername) {
        router.push('/login')
        return
      }
    }
  }, [router])

  if (!token || !username) {
    return null // or a loading spinner
  }

  const capitalizeFirstLetter = string => {
    return string?.charAt(0).toUpperCase() + string?.slice(1)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    router.push('/')
  }

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav
        className="sidebar d-flex flex-column p-3"
        style={{
          background: 'transparent',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(30px)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          width: '250px',
          height: '100vh',
          position: 'fixed',
          top: '0',
          left: '0',
          color: 'white'
        }}>
        <ul className="nav flex-column gap-4">
          <div className="mb-4 container">
            {username && (
              <div className="d-flex gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${username}`}
                  alt="person"
                  style={{
                    borderRadius: '50%',
                    height: '60px',
                    width: '60px',
                    objectFit: 'cover'
                  }}
                />
                <p className="mt-2 fw-bold" style={{ fontSize: '24px' }}>
                  {capitalizeFirstLetter(username)}
                </p>
              </div>
            )}
          </div>
          <NavItem icon={<IoHomeOutline />} text="Home" />
          <NavItem icon={<IoMdNotificationsOutline />} text="Notification" />
          <NavItem icon={<LuMessageSquare />} text="Message" />
          <NavItem icon={<IoMdHelpCircleOutline />} text="Help" />
          <NavItem icon={<MdOutlineSettings />} text="Settings" />
          <NavItem icon={<TbLogout />} text="Logout" onClick={logout} />
        </ul>
      </nav>
      {username && (
        <div className="container-fluid text-center p-4">
          <p className="text-white fw-bold" style={{ fontSize: '30px' }}>
            Welcome to your dashboard, {capitalizeFirstLetter(username)}!
          </p>
        </div>
      )}
    </div>
  )
}

const NavItem = ({ icon, text, onClick }) => (
  <li className="nav-item d-flex align-items-center" onClick={onClick}>
    <a
      className="nav-link active text-white"
      href="/"
      style={{ fontSize: '28px' }}>
      {icon}
    </a>
    {text}
  </li>
)
export default Dashboard
