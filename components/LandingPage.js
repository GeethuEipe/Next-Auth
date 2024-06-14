import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            GeeksForGeeks
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown">
                Coding Articles
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Page 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Page 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search site"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-2">Author Name</div>
          <div className="col-sm-8">
            <h2>Article Title</h2>
            <h5>Created on 20 Jan 2022</h5>
            <p>
              GeeksForGeeks is a Computer Science portal for geeks.It contains
              well written, well thought articles. This platform has been
              designed for every geek wishing to expand their knowledge, share
              their knowledge and is ready to grab their dream job. We have
              millions of articles, live as well as online courses, thousands of
              tutorials and much more just for the geek inside you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
