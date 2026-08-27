import React, { useState } from 'react';
import { projects } from '../data';

const accentMap = { cyan: '#22D3EE', green: '#4ADE80' };

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-20 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-[#00fff2] tracking-[0.2em] uppercase">Project Showcase</span>
          <div className="flex-1 h-px bg-[#1E293B]"></div>
          <span className="font-mono text-[11px] text-[#8B949E]">{projects.length} systems</span>
        </div>

        <div className="space-y-2">
          {projects.map((proj) => {
            const accent = accentMap[proj.accent] || '#22D3EE';
            const isOpen = active === proj.id;

            return (
              <div key={proj.id} className="border border-[#2D3748] overflow-hidden rounded-sm transition-all"
                style={{ borderLeftColor: isOpen ? accent : '#2D3748', borderLeftWidth: '3px' }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 hover:bg-[#161B27] transition-colors text-left group"
                  onClick={() => setActive(isOpen ? null : proj.id)}>
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs font-semibold" style={{ color: accent }}>{proj.id}</span>
                    <div>
                      <span className="text-sm font-semibold text-white">{proj.name}</span>
                      <span className="ml-3 font-mono text-xs text-[#C9D1D9]">{proj.tagline}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex gap-1.5">
                      {proj.tech.slice(0, 3).map(t => (
                        <span key={t} className="font-mono text-[10px] text-[#F0F6FC] px-2 py-0.5 border border-[#2D3748] bg-[#1A2035] rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-sm transition-transform duration-200 ml-2"
                      style={{ color: accent, display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      ▾
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#2D3748] px-6 py-7 bg-[#0F1117]">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <span className="font-mono text-[11px] text-[#C9D1D9] tracking-widest uppercase block mb-2">Problem</span>
                          <p className="text-[#F0F6FC] text-sm leading-relaxed">{proj.problem}</p>
                        </div>
                        <div>
                          <span className="font-mono text-[11px] tracking-widest uppercase block mb-2" style={{ color: accent }}>Solution</span>
                          <p className="text-[#CBD5E1] text-sm leading-relaxed">{proj.solution}</p>
                        </div>
                        <div>
                          <span className="font-mono text-[11px] text-[#C9D1D9] tracking-widest uppercase block mb-2">Outcome</span>
                          <p className="text-[#F0F6FC] text-sm leading-relaxed">{proj.outcome}</p>
                        </div>
                        <div>
                          <span className="font-mono text-[11px] text-[#C9D1D9] tracking-widest uppercase block mb-2">Repository</span>
                          <p className="text-[#F0F6FC] text-sm leading-relaxed"><a href={proj.repository} target="_blank" rel="noopener noreferrer">{proj.repository}</a></p>
                        </div>
                        <div>
                          <span className="font-mono text-[11px] text-[#C9D1D9] tracking-widest uppercase block mb-2">Live Demo</span>
                          <p className="text-[#F0F6FC] text-sm leading-relaxed"><a href={proj['Live Demo']} target="_blank" rel="noopener noreferrer">{proj['Live Demo']}</a></p>
                        </div>
                        <div>
                          <span className="font-mono text-[11px] text-[#C9D1D9] tracking-widest uppercase block mb-2">Documentation</span>
                          <p className="text-[#F0F6FC] text-sm leading-relaxed"><a href={proj.Documentation} target="_blank" rel="noopener noreferrer">{proj.Documentation}</a></p>
                        </div>
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-[#C9D1D9] tracking-widest uppercase block mb-4">Tech Stack</span>
                        <div className="space-y-2">
                          {proj.tech.map(t => (
                            <div key={t} className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }}></span>
                              <span className="font-mono text-xs text-[#CBD5E1]">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
