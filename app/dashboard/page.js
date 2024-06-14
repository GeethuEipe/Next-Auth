import Dashboard from '../../components/forms/Dashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export default function Login() {
  return (
    <main>
      <ProtectedRoute>
        <div
          className="bg-image justify-content-end"
          style={{
            backgroundImage: "url('/images/bg10.jpeg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%'
          }}>
          <Dashboard />
        </div>
      </ProtectedRoute>
    </main>
  )
}
