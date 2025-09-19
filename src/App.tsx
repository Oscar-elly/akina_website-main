import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function MainSite() {
  console.log('Rendering MainSite component');
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Mission />n
      <Services />
      <Programs />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  console.log('Rendering App component');
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
