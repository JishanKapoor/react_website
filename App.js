import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Website from './pages/website';
import Navbar from './components/navbar'; // Import Navbar
import Footer from './components/footer';
import Ai from './pages/ai';
import About from './pages/about';
import Graphic from './pages/graphic';
import Contact from './pages/contact';
import Ecomm from './pages/ecomm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/website-development" element={<Website />} />
          <Route path="/automation-tools" element={<Ai />} />
          <Route path='/about' element={<About />} />
          <Route path='/graphic-designing' element={<Graphic />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/E-Commerce' element={<Ecomm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
