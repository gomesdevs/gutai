export function HeroManifesto() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-8">
      <div className="max-w-4xl text-center">
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
          style={{ fontFamily: 'var(--font-gothic)' }}
        >
          GUTAI
        </h1>
        <p
          className="text-xl md:text-2xl text-[#8a8a8a] tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Artefatos para quem entende peso.
        </p>
        <p
          className="text-lg md:text-xl text-[#666666] mt-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Se você sabe, você sabe.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#8a8a8a] animate-pulse" />
      </div>
    </section>
  );
}
