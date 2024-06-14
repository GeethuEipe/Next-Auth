'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token')

    // Check if token exists
    if (!token) {
      router.push('/login')
      return // Exit early if no token exists
    }

    try {
      const decoded = JSON.parse(atob(token.split('.')[1])) // Decode token payload
      const tokenExp = decoded.exp // Expiry time in seconds since epoch
      const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds since epoch
      // Check if token has expired
      if (tokenExp < currentTime) {
        // Token expired, remove from local storage
        localStorage.removeItem('token')
        router.push('/login')
      }
    } catch (error) {
      console.error('Error decoding token:', error)
      // Handle decoding error or invalid token (optional)
      localStorage.removeItem('token')
      router.push('/login')
    }
  }, [router])
  // useEffect(() => {
  //   const token = localStorage.getItem('token') // Get token from localStorage
  //   // Redirect to login if token is not present
  //   if (!token) {
  //     router.push('/login')
  //   }
  // }, [])

  return <>{children}</>
}

export default ProtectedRoute
