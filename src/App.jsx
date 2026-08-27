import React from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Snapshot from './components/Snapshot';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F1117', color: '#E2E8F0' }}>
      <Nav />
      <main>
        <Intro />
        <Snapshot />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
    </div>
  );
}
