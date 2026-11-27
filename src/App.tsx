import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { DesktopShell } from './components/layout/DesktopShell';
import { AllWindowsClosedNotice } from './components/layout/AllWindowsClosedNotice';
import { Taskbar } from './components/layout/Taskbar';
import { TopBar } from './components/layout/TopBar';
import { WindowManagerProvider } from './context/WindowManagerContext';
import './App.css';

function App() {
  return (
    <WindowManagerProvider>
      <DesktopShell>
        <TopBar />
        <main className="desktop-workspace mx-auto w-full px-gutter-desktop">
          <div className="desktop-content flex flex-col gap-space-lg pb-space-xl pt-space-sm">
            <HeroSection />
            <AllWindowsClosedNotice />
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
    </WindowManagerProvider>
  );
}

export default App;
