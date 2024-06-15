'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  const [token, setToken] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token')
      setToken(storedToken)

      if (!storedToken) {
        router.push('/login')
        return
      }

      try {
        const decoded = JSON.parse(atob(storedToken.split('.')[1]))
        const tokenExp = decoded.exp
        const currentTime = Math.floor(Date.now() / 1000)

        if (tokenExp < currentTime) {
          localStorage.removeItem('token')
          router.push('/login')
        }
      } catch (error) {
        console.error('Error decoding token:', error)
        localStorage.removeItem('token')
        router.push('/login')
      }
    }
  }, [router])

  if (!token) {
    return null // or a loading spinner
  }

  return <>{children}</>
}

export default ProtectedRoute
