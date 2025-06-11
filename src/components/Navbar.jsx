import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (key) => {
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(close);
  };

  const links = [
    { label: "About", key: "about" },
    { label: "Projects", key: "projects" },
    { label: "Contact", key: "contact" },
  ];

  const navLinks = (
    <>
      {links.map(({ label, key }) => (
        <button
          key={key}
          onClick={() => scrollToSection(key)}
          className="block md:inline-block px-4 py-2 text-white hover:text-yellow-300 transition duration-200"
        >
          {label}
        </button>
      ))}
      <a
        href="https://drive.google.com/file/d/1t-TQbBZAb1HdZgRxe-UUGb9k6KV2_m3c/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 mt-2 md:mt-0 border border-white rounded-md text-white hover:bg-white hover:text-black transition-all duration-200"
      >
        <FiDownload size={16} />
        <p>Resume</p>
      </a>
    </>
  );

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1f1f1f]/90 border-b border-white/20 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold border-b-4 text-white">PK.</div>

        <div className="hidden md:flex items-center space-x-4">{navLinks}</div>

        <div className="md:hidden text-white">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-[#1f1f1f] border-t border-white/20 space-y-3">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
