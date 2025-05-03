import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
