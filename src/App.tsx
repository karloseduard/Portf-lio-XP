import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { DesktopIcons } from './components/layout/DesktopIcons';
import { DesktopShell } from './components/layout/DesktopShell';
import { Taskbar } from './components/layout/Taskbar';
import { TopBar } from './components/layout/TopBar';
import './App.css';

function App() {
  return (
    <DesktopShell>
      <TopBar />
      <main className="desktop-workspace mx-auto w-full px-gutter-desktop">
        <div className="desktop-content flex flex-col gap-space-lg pb-space-xl pt-space-sm">
          <DesktopIcons />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
      <Taskbar />
    </DesktopShell>
  );
}

export default App;
