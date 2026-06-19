const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Discord', href: '#' },
] as const;

export function Footer() {
  return (
    <footer className="py-16 px-8 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p
          className="text-xs text-[#666666]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          &copy; 2025 GUTAI &mdash; We don&apos;t mess with generic stuff.
        </p>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-[#8a8a8a] hover:text-[#c0c0c0] transition-colors"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
