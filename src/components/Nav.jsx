import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: "System", href: "#intro" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F1117]/95 backdrop-blur border-b border-[#2D3748]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#intro" className="font-mono text-sm text-[#22D3EE] tracking-widest hover:opacity-80 transition-opacity">
          BSS<span className="text-[#b3becb] ml-1">_</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              className="font-mono text-xs text-[#F0F6FC] hover:text-white tracking-wider transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-[#F0F6FC] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-[#2D3748] bg-[#0F1117]">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 font-mono text-xs text-[#F0F6FC] hover:text-white tracking-wider border-b border-[#1E293B] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
