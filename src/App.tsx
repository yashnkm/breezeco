import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Reviews from './pages/Reviews'
import Learn from './pages/Learn'
import Support from './pages/Support'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  // Initialize smooth scrolling with anchor support
  useSmoothScroll();

  // Get base path from environment
  const basename = import.meta.env.DEV ? '' : '/breezeco';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
