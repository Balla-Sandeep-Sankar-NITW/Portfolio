import React from 'react';
import { skills } from '../data';

const clusterAccent = {
  "Backend": "#22D3EE",
  "Databases": "#4ADE80",
  "AI & ML": "#A78BFA",
  "Tools": "#FBBF24",
  "Currently Learning": "#F472B6",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-[#00fbff] tracking-[0.2em] uppercase">Technical Capabilities</span>
          <div className="flex-1 h-px bg-[#1E293B]"></div>
        </div>

        <div className="space-y-7">
          {Object.entries(skills).map(([cluster, items]) => (
            <div key={cluster} className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
              <div className="md:w-48 flex-shrink-0 flex md:justify-end items-center gap-3 md:pt-1">
                <span className="font-mono text-[11px] tracking-widest uppercase font-medium"
                  style={{ color: clusterAccent[cluster] || '#F0F6FC' }}>
                  {cluster}
                </span>
                <span className="hidden md:block flex-shrink-0 w-6 h-px bg-[#2D3748]"></span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill}
                    className="px-3 py-1.5 font-mono text-xs text-[#CBD5E1] border border-[#2D3748] bg-[#161B27] hover:border-[#8B949E] hover:text-white hover:bg-[#1A2035] transition-all cursor-default rounded-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
