// // app/api/register.js
// import fs from 'fs'
// import path from 'path'

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, email, password } = req.body

//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'Missing required fields' })
//     }

//     const filePath = path.resolve(process.cwd(), 'data', 'users.json')
//     const fileData = fs.readFileSync(filePath)
//     const users = JSON.parse(fileData)

//     const userExists = users.find(user => user.email === email)

//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' })
//     }

//     const newUser = { username, email, password }
//     users.push(newUser)

//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2))

//     return res.status(201).json({ message: 'User registered successfully' })
//   } else {
//     res.setHeader('Allow', ['POST'])
//     return res.status(405).end(`Method ${req.method} not allowed`)
//   }
// }

// // import fs from 'fs'
// // import path from 'path'

// // export default function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const { username, email, password } = req.body
// //     const filePath = path.resolve('./data/users.json')
// //     const users = JSON.parse(fs.readFileSync(filePath, 'utf8'))

// //     users.push({ username, email, password })
// //     fs.writeFileSync(filePath, JSON.stringify(users, null, 2))

// //     res.status(201).json({ message: 'User registered successfully' })
// //   } else {
// //     res.status(405).json({ message: 'Method not allowed' })
// //   }
// // }

// import fs from 'fs'
// import path from 'path'

// const usersFilePath = path.resolve('./data/users.json')

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, email, password } = req.body

//     // Read the existing users
//     const fileData = fs.readFileSync(usersFilePath)
//     const users = JSON.parse(fileData)

//     // Check if the user already exists
//     if (
//       users.find(user => user.email === email || user.username === username)
//     ) {
//       res.status(409).json({ message: 'User already exists' })
//       return
//     }

//     // Add the new user
//     users.push({ username, email, password })

//     // Write the updated users to the file
//     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))

//     res.status(201).json({ message: 'User registered successfully' })
//   } else {
//     res.status(405).json({ message: 'Method not allowed' })
//   }
// }

import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import path from 'path'

const usersFilePath = path.resolve('./data/users.json')

export async function POST(request) {
  try {
    const { username, email, password } = await request.json()

    // Read the existing users
    const fileData = fs.readFileSync(usersFilePath)
    const users = JSON.parse(fileData)

    // Check if the user already exists
    if (
      users.find(user => user.email === email || user.username === username)
    ) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      )
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Add the new user
    users.push({ username, email, password: hashedPassword })

    // Write the updated users to the file
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export const GET = (req, res) => {
  return new Response('GET method not allowed', { status: 405 })
}
