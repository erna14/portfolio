import Prism from "@/components/backgrounds/Prism"

const HeroSection = () => {
  return (
    <div className='w-full h-screen relative'>
      <Prism 
        animationType="rotate" timeScale={0.5} height={3.1} baseWidth={5} 
        scale={3} hueShift={0} colorFrequency={1} noise={0} glow={1}
      />

      <div className='absolute inset-0 z-10 flex items-center justify-center h-screen flex-col gap-6'> 
        <div
          className="px-5 py-3 bg-white/10 rounded-full border border-white/20 text-xs font-medium
                  text-white/80 transition-all duration-300 ease-in-out hover:bg-white/15
                  hover:border-white/30 hover:text-white hover:-translate-y-0.5
                  hover:backdrop-blur-sm"
        >
          Software Engineer · Web Developer
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-1 max-w-2xl">
          <p className="text-white/70 text-sm font-medium tracking-widest uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="text-white text-5xl sm:text-6xl font-bold tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
            Erna Berbić
          </h1>
          <p className="text-white/90 text-md font-medium max-w-md leading-relaxed mt-3">
            I build fast, thoughtful software and smooth experiences for the web.
          </p>
        </div>

        <div className="flex gap-3 ">
          <button className="px-6 py-2 bg-white border border-white rounded-full text-black text-sm transition-all duration-300 ease-in-out hover:bg-white/15 hover:border-white/30 hover:text-white hover:backdrop-blur-sm">
            About Me
          </button>
          <button className="px-6 py-2 bg-white/10 border border-white/30 rounded-full text-sm transition-all duration-300 ease-in-out hover:bg-white hover:border-white hover:text-black">
            Contact Me
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection