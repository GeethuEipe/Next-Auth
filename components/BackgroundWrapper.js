import React from 'react'

function BackgroundWrapper({ children, className }) {
  return (
    <div
      className={`bg-image d-flex justify-content-center align-items-center ${className}`}
      style={{
        backgroundImage: "url('/images/bg10.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh', // Adjusted to minHeight
        width: '100%'
      }}>
      {children}
    </div>
  )
}

export default BackgroundWrapper
