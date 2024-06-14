// 'use client'

// import { Button, Container } from 'react-bootstrap'

// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'

// export default function Dashboard() {
//   const router = useRouter()

//   // useEffect(() => {
//   //   const loggedInUser = JSON.parse(localStorage.getItem('users'))
//   //   // if (!loggedInUser) {
//   //   //   router.push('/login')
//   //   // }
//   // }, [router])
//   const token = localStorage.getItem('token')
//   const username = localStorage.getItem('username')
//   console.log('token', token)
//   console.log('user', username)
//   const logout = () => {
//     // localStorage.removeItem('user')
//     localStorage.removeItem('token')
//     localStorage.removeItem('user')
//     router.push('/')
//   }
//   return (
//     <nav
//       className="navbar navbar-expand-lg"
//       style={{
//         background: 'transparent',
//         border: '1px solid rgba(255, 255, 255, 0.1)',
//         backdropFilter: 'blur(30px)',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//         borderBottomLeftRadius: '20px',
//         borderBottomRightRadius: '20px',
//         padding: '24px'
//       }}>
//       <div className="container-fluid">
//         {/* <a class="navbar-brand" href="#">
//           Navbar
//         </a> */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a
//                 className="nav-link active text-white"
//                 aria-current="page"
//                 href="/">
//                 Dashboard
//               </a>
//             </li>
//           </ul>
//           {token && username && (
//             <div className="d-flex gap-4">
//               <img
//                 src={`https://ui-avatars.com/api/?name=${username}`}
//                 alt="person"
//                 style={{
//                   borderRadius: '50%',
//                   height: '40px',
//                   width: '40px',
//                   objectFit: 'cover'
//                 }}
//               />

//               <button class="btn btn-outline-success" onClick={logout}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

'use client'

import { FaRegUserCircle } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { LuMessageSquare } from 'react-icons/lu'
import { MdOutlineSettings } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter()
  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    router.push('/')
  }

  useEffect(() => {
    // Check if user is logged in; if not, redirect to login page
    if (!token || !username) {
      router.push('/login')
    }
  }, [router, token, username])
  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = string => {
    return string?.charAt(0).toUpperCase() + string?.slice(1)
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
          // background: '#333',
          color: 'white'
        }}>
        <ul className="nav flex-column gap-4">
          <div className="mb-4 container">
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
              {/* <FaRegUserCircle style={{ width: '60px', height: '60px' }} /> */}
              <p className="mt-2 fw-bold" style={{ fontSize: '24px' }}>
                {capitalizeFirstLetter(username)}
              </p>
            </div>
          </div>
          <NavItem icon={<IoHomeOutline />} text="Home" />
          <NavItem icon={<IoMdNotificationsOutline />} text="Notification" />
          <NavItem icon={<LuMessageSquare />} text="Message" />
          <NavItem icon={<IoMdHelpCircleOutline />} text="Help" />
          <NavItem icon={<MdOutlineSettings />} text="Settings" />
          <NavItem icon={<TbLogout />} text="Logout" onClick={logout} />

          {/* <li className="nav-item d-flex align-items-center">
            <a className="nav-link active text-white" href="/">
              <IoHomeOutline style={{ fontSize: '28px' }} />
            </a>
            Home
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link active text-white" href="/">
              <IoMdNotificationsOutline style={{ fontSize: '28px' }} />
            </a>
            Notification
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link active text-white" href="/">
              <LuMessageSquare style={{ fontSize: '28px' }} />
            </a>
            Message
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link active text-white" href="/">
              <IoMdHelpCircleOutline style={{ fontSize: '28px' }} />
            </a>
            Help
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link active text-white" href="/">
              <MdOutlineSettings style={{ fontSize: '28px' }} />
            </a>
            Settings
          </li>
          <li onClick={logout} className="nav-item d-flex align-items-center">
            <a className="nav-link active text-white" href="/">
              <TbLogout style={{ fontSize: '28px' }} />
            </a>
            Logout
          </li> */}
        </ul>
      </nav>

      <div className="container-fluid text-center p-4">
        <p className="text-white fw-bold" style={{ fontSize: '30px' }}>
          Welcome to your dashboard, {capitalizeFirstLetter(username)}!
        </p>
      </div>
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
