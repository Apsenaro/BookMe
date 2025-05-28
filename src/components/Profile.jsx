import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div className="text-center py-10">Loading user profile...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Oops... {error.message}</div>;
  }

  return (
    isAuthenticated && user && (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-8">
        <div className="flex flex-col items-center">
          <img
            src={user.picture}
            alt={user.name || 'User profile picture'}
            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-200 shadow-md mb-4"
          />
          <h2 className="mt-2 text-2xl font-semibold text-gray-800">{user.name}</h2>
          {user.nickname && <p className="text-gray-600">@{user.nickname}</p>}
          <p className="text-gray-500 text-sm mt-1">{user.email}</p>
          
          {user.email_verified !== undefined && (
            <p className={`text-xs mt-2 px-2 py-1 rounded-full ${user.email_verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-amber-700'}`}>
              {user.email_verified ? 'Email Verified' : 'Email Not Verified'}
            </p>
          )}

          {user.updated_at && (
            <p className="text-xs text-gray-400 mt-4">
              Last updated: {new Date(user.updated_at).toLocaleDateString()}
            </p>
          )}
        </div>
        {/* We can add more sections here, like 'My Favorite Novels', 'Reading History', etc. */}
      </div>
    )
  );
}