import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const filePath = path.resolve(process.cwd(), 'data', 'users.json')
    const fileData = fs.readFileSync(filePath)
    const users = JSON.parse(fileData)
    res.status(200).json(users)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} not allowed`)
  }
}
