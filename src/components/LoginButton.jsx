import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <button 
      onClick={() => loginWithRedirect()}
      className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
    >
      Log In
    </button>
    )   
  )
}