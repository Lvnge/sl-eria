import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavBarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const NavBar = ({ isDark, toggleTheme }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="navbar z-10">
          {/* Logo - remains the same at all screen sizes */}
          <button>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="italic font-Cormorant"
            >
              sl-eria
            </Link>
          </button>

          {/* Desktop Navigation - hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/diseños"
              className="italic font-Cormorant hover:text-opacity-70 transition-colors duration-400"
            >
              diseños
            </Link>
            <Link
              to="/proyectos"
              className="italic font-Cormorant hover:text-opacity-70 transition-colors duration-400"
            >
              proyectos
            </Link>
            <Link
              to="/misión"
              className="italic font-Cormorant hover:text-opacity-70 transition-colors duration-400"
            >
              misión
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex gap-2 items-center relative">
            {/* Theme Toggle - same at all screen sizes */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }} // Match the CSS duration-400
                className="flex items-center justify-center"
              >
                {isDark ? (
                  // Dark mode (sun icon)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="transition-colors duration-400"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2c-.377.333-.905 1.2 0 2m0 16c.377.333.906 1.2 0 2m7.5-17.497c-.532-.033-1.575.22-1.496 1.495M5.496 17.5c.033.532-.22 1.575-1.496 1.496M5.003 4.5c-.033.532.22 1.576 1.497 1.497M18 17.503c.532-.032 1.575.208 1.496 1.414M22 12c-.333-.377-1.2-.905-2 0m-16-.5c-.333.377-1.2.906-2 0"
                    />
                  </svg>
                ) : (
                  // Light mode (moon icon)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="transition-colors duration-400"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12.97 3a8.02 8.02 0 0 0-4.054 7c0 4.418 3.522 8 7.866 8c1.146 0 2.236-.25 3.218-.698C18.39 19.544 15.787 21 12.849 21C7.962 21 4 16.97 4 12s3.962-9 8.849-9z"
                    />
                  </svg>
                )}
              </motion.div>
            </button>

            {/* Mobile Menu Toggle - visible on mobile, hidden on larger screens */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center"
            >
              <p className="italic font-Cormorant border-l-1 border-(--text)/10 dark:border-(--d-text)/20 min-w-16 transition-colors duration-400 ease-in-out">
                {menuOpen ? "cerrar" : "menú"}
              </p>
            </button>
          </div>
        </div>

        {/* Mobile Menu Container */}
        <div>
          <motion.div
            className="mobile-menu md:hidden"
            initial={{ y: "-100vh" }}
            animate={{ y: menuOpen ? 0 : "-100vh" }}
            exit={{ y: "-100vh" }}
            transition={{ type: "tween", duration: 0.55 }}
          >
            <Link to="/diseños" onClick={() => setMenuOpen(false)}>
              diseños
            </Link>
            <Link to="/proyectos" onClick={() => setMenuOpen(false)}>
              proyectos
            </Link>
            <Link to="/misión" onClick={() => setMenuOpen(false)}>
              misión
            </Link>

            <div className="flex flex-col gap-2 text-sm mt-auto mb-auto">
              <p className="text-lg select-none">acerca de mí</p>
              <p className="select-none">román</p>
              <p className="flex select-none">
                ig:&nbsp;
                <Link
                  to="https://www.instagram.com/rmg.wav/"
                  target="_blank"
                  className="custom-link"
                >
                  @rmg.wav
                </Link>
              </p>
              <p className="flex select-none">
                web:&nbsp;
                <Link
                  to="https://silentlung.com"
                  target="_blank"
                  className="custom-link"
                >
                  silentlung.com
                </Link>
              </p>
              <p className="select-none">langs: es, eng</p>
              <p className="select-none">loc: gdl, mx</p>
              <p className="select-none">1998</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
