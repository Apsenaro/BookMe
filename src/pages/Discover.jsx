import { useState, useEffect } from 'react';

// Placeholder for API call - replace with actual API integration
const fetchNovels = async (searchTerm) => {
  console.log(`Searching for: ${searchTerm}`);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (searchTerm.toLowerCase() === 'error') {
    throw new Error('Failed to fetch novels. Please try again.');
  }
  return [
    { id: 1, title: 'The Great Novel', author: 'Jane Author', genre: 'Fiction', cover: 'https://via.placeholder.com/150/DDDDDD/000000?Text=Book+Cover' },
    { id: 2, title: 'Another Story', author: 'John Writer', genre: 'Mystery', cover: 'https://via.placeholder.com/150/DDDDDD/000000?Text=Book+Cover' },
    { id: 3, title: 'Sci-Fi Adventure', author: 'Alex Coder', genre: 'Sci-Fi', cover: 'https://via.placeholder.com/150/DDDDDD/000000?Text=Book+Cover' },
  ].filter(novel => novel.title.toLowerCase().includes(searchTerm.toLowerCase()));
};

export default function Discover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [novels, setNovels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const results = await fetchNovels(searchTerm);
      setNovels(results);
    } catch (err) {
      setError(err.message);
      setNovels([]);
    }
    setIsLoading(false);
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Discover Novels</h1>
      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8 flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for novels, authors, or genres..."
          className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 disabled:opacity-50"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg max-w-xl mx-auto mb-6">
          {error}
        </div>
      )}

      {isLoading && !error && (
        <div className="text-center text-gray-600">Loading novels...</div>
      )}

      {!isLoading && !error && novels.length === 0 && searchTerm && (
        <div className="text-center text-gray-600">No novels found for "{searchTerm}". Try another search.</div>
      )}

      {!isLoading && !error && novels.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {novels.map(novel => (
            <div key={novel.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src={novel.cover} alt={novel.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-1">{novel.title}</h2>
              <p className="text-gray-700 mb-1">By: {novel.author}</p>
              <p className="text-sm text-gray-500 bg-gray-100 px-2 py-1 inline-block rounded">{novel.genre}</p>
              {/* Add a button to view details or add to list */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}