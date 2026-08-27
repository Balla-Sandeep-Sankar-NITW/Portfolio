import React from 'react';
import { personal } from '../data';

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, note: "Preferred contact" },
  { label: "GitHub", value: "/github.com/Balla-Sandeep-Sankar-NITW", href: personal.github, note: "Code & projects" },
  { label: "LinkedIn", value: "/linkedin.com/in/balla-sandeep-sankar", href: personal.linkedin, note: "Professional" },
  { label: "LeetCode", value: "/leetcode.com/u/Balla_Sandeep_Sankar", href: personal.leetcode, note: "Problem solving" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-[#04f7fb] tracking-[0.2em] uppercase">Contact</span>
          <div className="flex-1 h-px bg-[#1E293B]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">
              Let's build something.
            </h2>
            <p className="text-[#F0F6FC] text-sm leading-relaxed mb-2">
              Open to backend engineering roles, AI engineering positions, research collaborations, and interesting projects.
            </p>
            <p className="font-mono text-xs text-[#04f7eb] mt-5">
              // Response time: &lt; 48h
            </p>
          </div>

          <div className="space-y-1">
            {links.map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                className="flex items-center justify-between py-4 border-b border-[#1E293B] group hover:border-[#2D3748] transition-colors">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[11px] text-[#C9D1D9] w-16 tracking-wider uppercase">{link.label}</span>
                  <span className="text-sm text-[#CBD5E1] group-hover:text-white transition-colors font-mono">{link.value}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#8B949E] hidden md:block">{link.note}</span>
                  <span className="text-[#8B949E] group-hover:text-[#22D3EE] transition-colors text-sm">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-[#1A2035] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] text-[#03f032]">© 2026 Balla Sandeep Sankar</span>
          <span className="font-mono text-[11px] text-[#00ff1e]">Built with React · NIT Warangal</span>
        </div>
      </div>
    </section>
  );
}
