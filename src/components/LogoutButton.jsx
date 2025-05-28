import { useAuth0 } from '@auth0/auth0-react'

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <button 
      onClick={() => logout()}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Log Out
    </button>
    )   
  )
}