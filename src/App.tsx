import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Donation from './components/Donation';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

import Sponsorship from './components/Sponsorship';
import News from './components/News';
import FAQ from './components/FAQ';

// New pages to be created
import WhatWeDo from './components/WhatWeDo';
import HowToHelp from './components/HowToHelp';
import OurStories from './components/OurStories';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function MainSite() {
  console.log('Rendering MainSite component');
  return (
    <Layout>
      <BackgroundSlideshow />
      <About />
      <Mission />
      <Services />
      <Programs />
      <Impact /> 
      <Contact />
    </Layout>
  );
}

function App() {
  console.log('Rendering App component');
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/what-we-do" element={<Layout><WhatWeDo /></Layout>} />
          <Route path="/how-to-help" element={<Layout><HowToHelp /></Layout>} />
          <Route path="/our-stories" element={<Layout><OurStories /></Layout>} />
          <Route path="/donate" element={<Layout><Donation /></Layout>} />
          <Route path="/sponsorship" element={<Layout><Sponsorship /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/faq" element={<Layout><FAQ /></Layout>} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
