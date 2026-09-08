import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Background3D from '../components/3d/Background3D';

const Home = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      </div>
      <div className="relative z-10 flex flex-col gap-24 pb-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default Home;
