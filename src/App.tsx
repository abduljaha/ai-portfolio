import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot';
import { profile } from './data/profile';

// Lazy load heavy components
const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-primary-blue/30 selection:text-white">
        <CustomCursor />
        <Navbar profile={profile} />
        <main>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
        </main>
        <Footer profile={profile} />
      </div>
      <Chatbot />
    </Router>
  );
}

export default App;
