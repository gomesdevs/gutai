export default function DropLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-6 w-32 bg-[#141010] border border-[#1a1a1a] mb-8 animate-pulse" />
          <div className="h-16 md:h-24 w-64 bg-[#141010] border border-[#1a1a1a] mb-8 animate-pulse" />
          <div className="h-6 w-96 bg-[#141010] border border-[#1a1a1a] animate-pulse" />
        </div>
      </div>
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[3/4] bg-[#141010] border border-[#1a1a1a] animate-pulse" />
              <div className="h-4 w-24 bg-[#141010] border border-[#1a1a1a] animate-pulse" />
              <div className="h-5 w-48 bg-[#141010] border border-[#1a1a1a] animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
