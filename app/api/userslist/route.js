import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.resolve('data', 'users.json')
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const users = JSON.parse(fileData)
  return NextResponse.json(users)
}
