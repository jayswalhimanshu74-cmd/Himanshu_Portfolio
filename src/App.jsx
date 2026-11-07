import Navbar from './components/Common/Navbar';
import CustomCursor from './components/Common/CustomCursor';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Stack from './components/Skills/Stack';
import Timeline from './components/Experience/Timeline';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="relative bg-surface-container-lowest text-on-surface selection:bg-primary/30 selection:text-on-surface">
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
    </div>
  );
}

export default App;
