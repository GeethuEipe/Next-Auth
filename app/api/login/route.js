import { NextResponse } from 'next/server' // Ensure you import NextResponse
import bcrypt from 'bcryptjs'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import path from 'path'

const usersFilePath = path.resolve('./data/users.json')
const secret = process.env.JWT_SECRET || 'your_generated_jwt_secret_here'

export async function POST(request) {
  try {
    const { emailOrUsername, password } = await request.json()

    // Read the existing users
    const fileData = fs.readFileSync(usersFilePath)
    const users = JSON.parse(fileData)

    // Find the user by email or username
    const user = users.find(
      user =>
        user.email === emailOrUsername || user.username === emailOrUsername
    )

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: user.username, email: user.email },
      secret,
      { expiresIn: '1hr' }
    )

    // Log the generated token
    console.log('Generated JWT token:', token)

    // Return token and user data in response
    return NextResponse.json({ token, user }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    )
  }
}

export const GET = (req, res) => {
  return new Response('GET method not allowed', { status: 405 })
}
