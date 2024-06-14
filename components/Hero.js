'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

const Hero = () => {
  return (
    <div className="container-xl py-5 text-white mt-4" id="hero-section">
      <div className="row">
        <div className="col-md-6">
          <div className="text-container d-flex p-4 flex-column text-center text-md-start justify-content-center h-100">
            <h1 className="display-3 fw-bold">
              <span style={{ color: '#db4383' }}>Subscribe Now</span>
              <br /> to Our Newsletter
            </h1>
            <p className=" mb-4">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.`}
            </p>
            <div className="d-grid gap-3 col-md-7">
              <input
                type="text"
                className="form-control rounded-5"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control rounded-5"
                placeholder="Email"
              />
              <button
                style={{ background: '#db4383' }}
                className="btn py-2 rounded-5 col-md-4">
                Send
              </button>
            </div>
            {/* <div className="d-grid gap-3 d-md-flex justify-content-md-start">
              <button className="btn btn-outline-light py-2 rounded-2 col-md-3">
                Sign Up
              </button>
              <button className="btn btn-outline-light py-2 rounded-2 col-md-3">
                Login
              </button>
            </div> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="image-container d-flex justify-content-center">
            <Image
              src={'/images/phone-mockup.png'}
              alt="e-book"
              width={550}
              height={550}
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
