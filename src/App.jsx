import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import PortfolioDetail from './components/PortfolioDetail';
import About from './components/About';
import Download from './components/Download';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
