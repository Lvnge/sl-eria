import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="navbar z-10">
          <p className="italic font-Cormorant">sl-eria</p>
          <div className="flex gap-2 items-center relative">
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

            <button onClick={() => setMenuOpen(!menuOpen)}>
              <p className="italic font-Cormorant border-l-1 border-(--text)/10 min-w-16">
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
            animate={{ y: menuOpen ? 0 : "-100vh" }} // Slide in from the top, or slide out to the top
            exit={{ y: "-100vh" }} // Slide out to the top when menuOpen is false
            transition={{ type: "tween", duration: 0.55 }} // Smooth transition from top to bottom
          >
            <p className="">misión</p>
            <p className="">diseños</p>
            <p className="">proyectos</p>

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
