import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Sparkles, Sun, Moon, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Dumbbell className="h-6 w-6 text-cyan-400" />
              <Sparkles className="h-3 w-3 text-fuchsia-400 absolute -right-1 -top-1" />
            </div>
            <span className="font-extrabold tracking-tight text-white text-lg">
              IronPulse <span className="text-cyan-400">Fitness</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium text-white/80 hover:text-white transition-colors`
                }
              >
                {({ isActive }) => (
                  <span className="px-1.5 py-0.5">
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-violet-500 rounded-full"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </NavLink>
              ))}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
