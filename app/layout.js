import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Next Auth App',
  description: 'Next Auth App'
}
export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
