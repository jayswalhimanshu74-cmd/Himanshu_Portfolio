import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Common/Navbar';
import CustomCursor from './components/Common/CustomCursor';
import PageLoader from './components/Common/PageLoader';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Stack from './components/Skills/Stack';
import Timeline from './components/Experience/Timeline';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-surface-container-lowest text-on-surface selection:bg-primary/30 selection:text-on-surface">
      <AnimatePresence>
        {isLoading && <PageLoader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          
          <main>
            <Hero />
            <Projects />
            <Stack />
            <Timeline />
            <About />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
