// pages/api/user.js

import authMiddleware from '../../lib/authMiddleware'

const handler = (req, res) => {
  const user = req.user
  res.status(200).json({ user })
}

export default authMiddleware(handler)
