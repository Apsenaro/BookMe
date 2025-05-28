import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div className="text-center">Loading...</div>
  }

  return (
    isAuthenticated && (
      <div className="text-center">
        <img 
          src={user.picture} 
          alt={user.name} 
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h2 className="mt-2 text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    )
  )
}