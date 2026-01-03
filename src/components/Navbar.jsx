import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy-policy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
    { to: "/disclaimer", label: "Disclaimer" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold text-blue-700">USAT Prep</Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-600" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
