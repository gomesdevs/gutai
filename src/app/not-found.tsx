export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-8">
      <div className="max-w-md text-center">
        <p
          className="text-xs tracking-[0.3em] text-[#666666] uppercase mb-6"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          404
        </p>
        <h1
          className="text-4xl font-bold tracking-tighter mb-6"
          style={{ fontFamily: 'var(--font-gothic)' }}
        >
          ARTEFATO NÃO ENCONTRADO
        </h1>
        <p
          className="text-sm text-[#8a8a8a] mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          O que você procura não existe — ou nunca existiu.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-[#c0c0c0] text-[#0a0a0a] border-4 border-[#c0c0c0] px-6 py-3 font-mono font-bold text-xs uppercase tracking-[0.1em] transition-all duration-200 hover:bg-[#0a0a0a] hover:text-[#c0c0c0] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#c0c0c0]"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
}
