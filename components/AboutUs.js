import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading mb-4 display-3 fw-bold">About Us</h2>
            <p className="text-muted">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero et libero placerat, at varius lorem convallis.
              Quisque posuere purus vel urna iaculis, id commodo nisi finibus.`}
            </p>
            <p className="text-muted">
              {`  Suspendisse potenti. Nam quis est et purus auctor finibus. Ut velnisi ligula. Sed congue lobortis orci nec facilisis.`}
            </p>
            <Link href="/register" className="nav-link fw-medium" passHref>
              <button className="btn rounded-5 bg-warning py-2 rounded-2 col-md-3 mt-3">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <Image
              src={'/images/about.png'}
              alt="logo"
              width={500}
              height={500}
              className="img-fluid rounded-circle d-block mx-auto mb-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs
