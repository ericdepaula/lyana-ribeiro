import { useState, useEffect } from "react";
import {FaInstagram, FaWhatsapp } from "react-icons/fa";
import {LuMenu, LuX} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBackground = isScrolled || isHovered || isMenuOpen;

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    showBackground ? "bg-white shadow-md" : "bg-transparent"
  }`;

  const textClass = `transition-colors duration-300 ${
    showBackground ? "text-[#3B2E2A]" : "text-white"
  }`;

  const mobileLinkClass =
    "text-2xl text-[#3B2E2A] hover:text-[#D9A977] transition-colors";

  const iconClass = `transition-colors duration-300 ${
    showBackground ? "text-[#3B2E2A]" : "text-white"
  }`;

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsHovered(false); // Garante que o hover seja resetado ao fechar o menu
  };

  return (
    <nav
      className={navClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Lado Esquerdo: Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className={`${textClass} hover:text-[#D9A977] transition-colors`}
            >
              Home
            </a>
            <a
              href="#sobre"
              className={`${textClass} hover:text-[#D9A977] transition-colors`}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className={`${textClass} hover:text-[#D9A977] transition-colors`}
            >
              Serviços
            </a>
            <a
              href="#contato"
              className={`${textClass} hover:text-[#D9A977] transition-colors`}
            >
              Contato
            </a>
          </div>

          {/* Lado Esquerdo: Ícone do Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={iconClass}
            >
              {isMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
            </button>
          </div>

          {/* Centro: Nome (visível em todas as telas) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1
              className={`text-4xl font-signature ${textClass} whitespace-nowrap`}
            >
              Lyana Ribeiro
            </h1>
          </div>

          {/* Lado Direito: Ícones de redes sociais */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="https://wa.me/5513982009366"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconClass} hover:text-[#D9A977] transition-colors`}
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://instagram.com/lyanamasso"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconClass} hover:text-[#D9A977] transition-colors`}
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Menu Lateral Móvel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-2/3 max-w-sm bg-white shadow-lg z-50 md:hidden"
          >
            <div className="flex flex-col items-start justify-center h-full p-8 space-y-6">
              <a href="#home" className={mobileLinkClass} onClick={closeMenu}>
                Home
              </a>
              <a href="#sobre" className={mobileLinkClass} onClick={closeMenu}>
                Sobre
              </a>
              <a
                href="#servicos"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                Serviços
              </a>
              <a
                href="#contato"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
