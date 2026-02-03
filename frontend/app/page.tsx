import { HeroSection, WorkExperienceSection, SkillsSection, ContactFormSection } from '@/sections'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <WorkExperienceSection />
      <SkillsSection />
      <ContactFormSection />
    </main>
  );
}
