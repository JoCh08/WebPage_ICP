import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Servicios from './pages/servicios.jsx';
import Loader from './components/LoaderSection.jsx';
import IntroLoader, { SESSION_KEY } from './components/IntroLoader.jsx';
import ScrollToTop from './utilities/ScrollToTop';
import './App.css';

function App() {
  // First visit this session → IntroLoader; subsequent → brief LoaderSection
  const [showIntro,     setShowIntro]     = useState(() => !sessionStorage.getItem(SESSION_KEY));
  const [loading,       setLoading]       = useState(() => !!sessionStorage.getItem(SESSION_KEY));
  const [loaderMounted, setLoaderMounted] = useState(() => !!sessionStorage.getItem(SESSION_KEY));

  useEffect(() => {
    // Skip technical preloader on first visit — IntroLoader covers it
    if (!sessionStorage.getItem(SESSION_KEY)) return;

    function done() {
      setLoading(false);
      setTimeout(() => setLoaderMounted(false), 550);
    }

    const timer = setTimeout(done, 2200);
    const handleLoad = () => { clearTimeout(timer); done(); };
    if (document.readyState === 'complete') { done(); return; }
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full m-0 p-0">
      {showIntro && <IntroLoader onDone={() => setShowIntro(false)} />}
      {loaderMounted && <Loader fading={!loading} />}
      <Navbar />
      <ScrollToTop />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="*"                               element={<Home />} />
          <Route path="/nuestros-servicios"             element={<Service standalone />} />
          <Route path="/nuestros-servicios/:servicioId" element={<Servicios />} />
          <Route path="/sobre-nosotros"                 element={<About />} />
          <Route path="/contactanos"                    element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
