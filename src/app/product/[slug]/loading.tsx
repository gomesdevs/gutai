export default function ProductLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-24 pb-4 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-4 w-40 bg-[#141010] border border-[#1a1a1a] animate-pulse" />
        </div>
      </div>
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="aspect-[3/4] bg-[#141010] border border-[#1a1a1a] animate-pulse" />
          <div className="space-y-6">
            <div className="h-6 w-32 bg-[#141010] border border-[#1a1a1a] animate-pulse" />
            <div className="h-12 w-64 bg-[#141010] border border-[#1a1a1a] animate-pulse" />
            <div className="h-8 w-24 bg-[#141010] border border-[#1a1a1a] animate-pulse" />
            <div className="h-20 w-full bg-[#141010] border border-[#1a1a1a] animate-pulse" />
            <div className="h-12 w-full bg-[#141010] border border-[#1a1a1a] animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
