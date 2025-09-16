import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Programs />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;