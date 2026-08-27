import React from 'react';
import { learning } from '../data';

export default function Learning() {
  return (
    <section id="learning" className="py-20 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-[#00ffff] tracking-[0.2em] uppercase">Current Research</span>
          <div className="flex-1 h-px bg-[#1E293B]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#03d3f8] text-sm font-mono mb-6">
              // Active exploration threads
            </p>
            <div className="space-y-3.5">
              {learning.map((topic, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="font-mono text-sm text-[#8B949E] group-hover:text-[#22D3EE] transition-colors w-5 text-right flex-shrink-0">→</span>
                  <span className="text-sm text-[#F0F6FC] group-hover:text-white transition-colors font-mono">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#2D3748] p-7 bg-[#161B27] rounded-sm">
            <div className="font-mono text-[11px] text-[#1be0dd] tracking-widest uppercase mb-5">// engineer.log</div>
            <p className="text-[#F0F6FC] text-sm leading-relaxed mb-4">
              Currently deep-diving into agentic AI architectures — exploring how LangGraph enables stateful, multi-step reasoning agents that can operate autonomously on complex tasks.
            </p>
            <p className="text-[#e5eef7] text-sm leading-relaxed">
              Interested in the production side: memory management, tool orchestration, fallback handling, and making LLM systems reliable enough to ship to real users.
            </p>
            <div className="mt-6 pt-5 border-t border-[#2D3748] font-mono text-[11px] text-[#05f57d]">
              STATUS: IN_PROGRESS · FOCUS: AGENTIC_AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
