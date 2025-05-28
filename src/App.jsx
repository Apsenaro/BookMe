import Header from "./components/Header"
import Profile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react"

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  return(
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        {isAuthenticated ? (
          <div>
            <Profile />
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Novel Finder</h2>
              {/* Novel search and display components will go here */}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Welcome to BookMe</h2>
            <p className="mb-6">Please log in to discover and track your favorite novels</p>
          </div>
        )}
      </main>
    </div>
  )
}
