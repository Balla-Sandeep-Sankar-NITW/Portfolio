import React, { useEffect, useState } from 'react';
import { personal, systemStatus } from '../data';

const statusColor = {
  running: '#4ADE80',
  connected: '#4ADE80',
  active: '#4ADE80',
  deployed: '#22D3EE',
  learning: '#FBBF24',
};

const statusDot = (status) => (
  <span className="inline-block w-2 h-2 rounded-full mr-2.5 flex-shrink-0"
    style={{ backgroundColor: statusColor[status] }} />
);

export default function Intro() {
  const [typed, setTyped] = useState('');
  const command = '$ system-status --live';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(command.slice(0, i + 1));
      i++;
      if (i >= command.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="mb-10 fade-up">
          <span className="font-mono text-xs text-[#9af803] tracking-[0.2em] uppercase">
            NIT Warangal · B.Tech
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight fade-up-delay-1 mb-3">
              {personal.name.split(' ')[0]}{' '}
              <br />
              <span className="text-[#F0F6FC]">{personal.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="font-mono text-sm text-[#22D3EE] mb-6 fade-up-delay-2 tracking-wide">
              {personal.role}
            </p>

            <p className="text-[#CBD5E1] text-sm leading-relaxed max-w-sm fade-up-delay-3 mb-10">
              {personal.about}
            </p>

            <div className="flex flex-wrap gap-3 fade-up-delay-4">
              <a href="#projects"
                className="px-5 py-2.5 text-xs font-mono bg-[#22D3EE] text-[#0F1117] font-semibold tracking-wider hover:bg-[#06B6D4] transition-colors">
                View Projects
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer"
                className="px-5 py-2.5 text-xs font-mono border border-[#2D3748] text-[#CBD5E1] hover:text-white hover:border-[#8B949E] transition-colors">
                GitHub
              </a>
              <a href={personal.resume}
                className="px-5 py-2.5 text-xs font-mono border border-[#2D3748] text-[#CBD5E1] hover:text-white hover:border-[#8B949E] transition-colors">
                Resume
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                className="px-5 py-2.5 text-xs font-mono border border-[#2D3748] text-[#CBD5E1] hover:text-white hover:border-[#8B949E] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — Terminal */}
          <div className="fade-up-delay-2">
            <div className="border border-[#2D3748] bg-[#161B27] rounded-sm">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#2D3748] bg-[#1A2035] rounded-t-sm">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
                <span className="ml-auto font-mono text-[11px] text-[#C9D1D9]">env: production</span>
              </div>

              <div className="p-6 font-mono text-xs space-y-5">
                <div className="text-[#22D3EE] text-sm">
                  {typed}<span className="animate-pulse text-[#4ADE80]">▌</span>
                </div>

                <div className="space-y-3 pt-1">
                  {systemStatus.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[#F0F6FC] flex items-center">
                        {statusDot(item.status)}
                        {item.label}
                      </span>
                      <span className="text-[11px] tracking-wider uppercase font-medium"
                        style={{ color: statusColor[item.status] }}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#2D3748] pt-4 text-[#c5d0dd] text-[11px] tracking-widest">
                  UPTIME: ∞ · MODE: BUILD
                </div>
              </div>
            </div>

            <p className="mt-3 font-mono text-[11px] text-[#8B949E] tracking-wide">
              // always shipping, always learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
