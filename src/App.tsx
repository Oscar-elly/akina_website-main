import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundSlideshow from './components/BackgroundSlideshow';
const About = lazy(() => import('./components/About'));
import Mission from './components/Mission';
import Services from './components/Services';
import Programs from './components/Programs';


import Impact from './components/Impact';
import Contact from './components/Contact';
import Donation from './components/Donation';

import Sponsorship from './components/Sponsorship';
import News from './components/News';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';

// New pages to be created
import WhatWeDo from './components/WhatWeDo';
import HowToHelp from './components/HowToHelp';
import OurStories from './components/OurStories';
import ArticlePage from './components/ArticlePage';
import { MapPin, Users, Heart } from 'lucide-react';
import backgroundImage1 from './assets/background_image1.jpg';
import ImageWithWatermark from './components/ImageWithWatermark';

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
  const newAboutSection = (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-akina-purple to-akina-orange bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Akina (Swahili for family) Ties provides crisis accommodation and a range of community education programs in the Kisii, Nyamira, and Migori areas of Western Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-akina-purple to-akina-orange rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <ImageWithWatermark
                src={backgroundImage1}
                alt="Children in Kenya"
                className="relative rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Focus</h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Our crisis accommodation centre and programs are aimed at improving the lives of orphans, vulnerable children, teens and women affected by gender based violence, HIV/AIDS, and neglect.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Service Areas</h4>
                  <p className="text-gray-600">Kisii, Nyamira, and Migori Counties</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-akina-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Who We Serve</h4>
                  <p className="text-gray-600">Orphans, vulnerable children, teens, and women</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-akina-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Our Impact</h4>
                  <p className="text-gray-600">Breaking cycles of violence, poverty, and discrimination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      <BackgroundSlideshow />
      {newAboutSection}
      <Mission />
      <Services />
      <Programs />
      <Impact />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/about" element={<Layout><Suspense fallback={<div>Loading...</div>}><About /></Suspense></Layout>} />
        <Route path="/what-we-do" element={<Layout><WhatWeDo /></Layout>} />
        <Route path="/how-to-help" element={<Layout><HowToHelp /></Layout>} />
        <Route path="/our-stories" element={<Layout><OurStories /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/donate" element={<Layout><Donation /></Layout>} />
        <Route path="/sponsorship" element={<Layout><Sponsorship /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/article/:id" element={<Layout><ArticlePage /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
