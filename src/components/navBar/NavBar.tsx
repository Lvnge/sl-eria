import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  const [isDark, setIsDark] = useState(false);

  // Set the theme on initial load
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="navbar z-10">
          <p className="italic font-Cormorant">sl-eria</p>
          <div className="flex gap-2 items-center relative">
            <button onClick={toggleTheme}>
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="flex items-center justify-center"
              >
                {isDark ? (
                  // Dark mode (sun icon)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2c-.377.333-.905 1.2 0 2m0 16c.377.333.906 1.2 0 2m7.5-17.497c-.532-.033-1.575.22-1.496 1.495M5.496 17.5c.033.532-.22 1.575-1.496 1.496M5.003 4.5c-.033.532.22 1.576 1.497 1.497M18 17.503c.532-.032 1.575.208 1.496 1.414M22 12c-.333-.377-1.2-.905-2 0m-16-.5c-.333.377-1.2.906-2 0"
                      color="currentColor"
                    />
                  </svg>
                ) : (
                  // Light mode (moon icon)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
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

            <button onClick={() => setMenuOpen(!menuOpen)}>
              <p className="italic font-Cormorant border-l-1 border-(--text)/10 dark:border-(--d-text)/20 min-w-16 transition-colors duration-0 ease-in-out">
                {menuOpen ? "cerrar" : "menú"}
              </p>
            </button>
          </div>
        </div>
        <div>
          {/* Mobile Menu */}
          <motion.div
            className="mobile-menu"
            initial={{ y: "-100vh" }} // Start off-screen, just above the visible area
            animate={{ y: menuOpen ? 0 : "-94.5vh" }} // Slide in from the top, or slide out to the top
            exit={{ y: "-100vh" }} // Slide out to the top when menuOpen is false
            transition={{ type: "tween", duration: 0.55 }} // Smooth transition from top to bottom
          >
            <p className="">diseños</p>
            <p className="">proyectos</p>
            <p className="">misión</p>

            <div className="flex flex-col gap-2 text-sm mt-auto mb-auto">
              <p className="text-lg select-none">acerca de mí</p>
              <p className="select-none">román</p>
              <p className="flex select-none">
                ig:&nbsp;
                <span className="custom-link">@rmg.wav</span>
              </p>
              <p className="flex select-none">
                web:&nbsp;
                <span className="custom-link">silentlung.com</span>
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
