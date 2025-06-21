import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './Pages/Home'
import Browse from './Pages/Browse'
// import NovelDetail from './Pages/NovelDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            {/* <Route path="/novel/:id" element={<NovelDetail />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
