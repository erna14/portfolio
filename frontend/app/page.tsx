
import HeroSection from './_components/HeroSection';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />

      {/* Content */}
      <section className="relative z-10 flex items-center justify-center h-screen">
        <h1 className="text-white text-5xl font-bold">
          Nesto Nesto
        </h1>
      </section>
    </main>
  );
}
