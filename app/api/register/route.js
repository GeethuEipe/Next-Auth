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
