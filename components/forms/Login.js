'use client'

import './Register.css'

import { FaLock, FaUser } from 'react-icons/fa'

import ToastMessage from '../../components/ToastMessage'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()
  const [toast, setToast] = useState({ show: false, message: '', type: '' })

  const onSubmit = async data => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json()
      console.log('responseData', responseData)

      if (response.ok) {
        localStorage.setItem('token', responseData.token)
        localStorage.setItem('username', responseData.user.username)

        setToast({
          show: true,
          message: 'Login successful!',
          type: 'success'
        })
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      } else {
        const errorMessage =
          responseData.message || 'Login failed. Please check your credentials.'
        setToast({ show: true, message: errorMessage, type: 'danger' })
      }
    } catch (error) {
      console.error('Login Error:', error)
      setToast({
        show: true,
        message: 'Login failed. Please check your credentials.',
        type: 'danger'
      })
    }
  }

  return (
    <>
      <ToastMessage
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        message={toast.message}
        type={toast.type}
      />
      <div className="wrapper">
        <div className="form-box login">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <h1>Login</h1>
            <div className="input-box mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username or Email"
                {...register('emailOrUsername', { required: true })}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register('password', { required: true })}
              />
              <FaLock className="icon" />
            </div>
            {/* {error && <p className="error-message">{error}</p>} */}
            <button type="submit">Login</button>
            <div className="register-link">
              {`Don't have an account?`} <a href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginComponent
