import { HeroSection, SkillsSection, WorkExperienceSection } from "./_sections";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* <HeroSection /> */}
      <WorkExperienceSection />
      <SkillsSection />
    </main>
  );
}
