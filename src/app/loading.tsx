export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-[#c0c0c0] animate-spin" />
        <p
          className="text-xs text-[#666666] tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Carregando...
        </p>
      </div>
    </div>
  );
}
