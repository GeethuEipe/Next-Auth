import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact" className="py-5" style={{ background: '#177Cb0' }}>
      <div className="container">
        <div className="row align-items-center gap-3">
          <div className="col-lg-6">
            <h2 className="section-heading mb-4 display-3 fw-bold">
              Contact Us
            </h2>
            <p className="text-muted">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero et libero placerat, at varius lorem convallis.
              Quisque posuere purus vel urna iaculis, id commodo nisi finibus.`}
            </p>
            <p className="text-muted">
              {`Suspendisse potenti. Nam quis est et purus auctor finibus. Ut velnisi ligula. Sed congue lobortis orci nec facilisis.`}
            </p>
            <Link href="/register" className="nav-link fw-medium" passHref>
              <button className="btn btn-outline-dark rounded-2 py-2 rounded-2 col-md-3 mt-3">
                Learn more
              </button>
            </Link>
          </div>

          <div className="row col-md-4 col-md-offset-3">
            <form onSubmit={''} className="container mt-4">
              <div className="d-flex gap-2 form-group mb-3">
                <div>
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div>
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="form-group mb-3">
                <label>Address</label>
                <input type="email" className="form-control" placeholder="" />
              </div>
              <div className="form-group mb-3">
                <label>Message</label>
                <textarea type="text" className="form-control" placeholder="" />
              </div>
              <div className="">
                <button type="submit" className="btn btn-dark">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactUs
