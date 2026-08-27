import React from 'react';
import { snapshot } from '../data';

const columns = [
  { label: "Focus Areas", key: "focusAreas", prefix: "//", color: "#22D3EE" },
  { label: "Currently Building", key: "currentlyBuilding", prefix: ">>", color: "#4ADE80" },
  { label: "Interests", key: "interests", prefix: "--", color: "#A78BFA" },
];

export default function Snapshot() {
  return (
    <section id="snapshot" className="py-20 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-[#00ffff] tracking-[0.2em] uppercase">Engineering Snapshot</span>
          <div className="flex-1 h-px bg-[#1E293B]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-[#2D3748] rounded-sm">
          {columns.map((col, ci) => (
            <div key={col.key}
              className={`p-7 ${ci < columns.length - 1 ? 'md:border-r border-b md:border-b-0 border-[#2D3748]' : ''}`}>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-sm font-medium" style={{ color: col.color }}>{col.prefix}</span>
                <span className="font-mono text-xs text-[#F0F6FC] tracking-wider uppercase">{col.label}</span>
              </div>
              <ul className="space-y-3.5">
                {snapshot[col.key].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
                      style={{ backgroundColor: col.color, opacity: 0.5 }}></span>
                    <span className="text-sm text-[#CBD5E1] group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
