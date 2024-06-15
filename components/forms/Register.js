'use client'

import './Register.css'

import { FaLock } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ToastMessage from '../../components/ToastMessage'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()
  const [toast, setToast] = useState({ show: false, message: '', type: '' })

  const onSubmit = async data => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json()
      console.log('responseData', responseData)

      if (response.ok) {
        setToast({
          show: true,
          message: 'User registered successfully!',
          type: 'success'
        })
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      } else {
        const errorMessage =
          responseData.message || 'Registration failed. Please try again.'
        setToast({ show: true, message: errorMessage, type: 'danger' })
      }
    } catch (error) {
      console.error('Error registering user:', error)
      setToast({
        show: true,
        message: { error },
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
            <h1>Create an account</h1>
            <div className="input-box mb-3">
              {/* <label className="mb-2">Username</label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                {...register('username', { required: true })}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box mb-3">
              {/* <label className="mb-2">Email</label> */}
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                {...register('email', { required: true })}
              />
              <MdEmail className="icon" />
            </div>
            <div className="input-box mb-3">
              {/* <label className="mb-2">Password</label> */}
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                {...register('password', { required: true })}
              />
              <FaLock className="icon" />
            </div>

            <button type="submit">Sign Up</button>

            <div className="register-link">
              Already have an account? <a href="/login">Log in</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
