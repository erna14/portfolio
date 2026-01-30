import HeroSection from "./_components/HeroSection";
import WorkExperienceSection from "./_components/WorkExperienceSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <WorkExperienceSection />
    </main>
  );
}
