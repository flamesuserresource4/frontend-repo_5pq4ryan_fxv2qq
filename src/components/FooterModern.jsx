import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FooterModern = () => {
  const links = [
    { label: "Programs", href: "#" },
    { label: "Trainers", href: "#" },
    { label: "Membership", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div>
            <div className="text-white font-extrabold text-xl">IronPulse <span className="text-cyan-400">Fitness</span></div>
            <p className="text-white/70 mt-2 max-w-sm">Train Hard. Shine Harder. Elevating your fitness journey with premium programs and elite coaching.</p>
          </div>

          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-white/70 hover:text-white text-sm">{l.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href }) => (
              <a key={href} href={href} className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} IronPulse Fitness. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default FooterModern;
