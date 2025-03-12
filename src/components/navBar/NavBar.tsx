import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="navbar">
          <p className="italic font-Cormorant">sl-eria</p>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <p className="italic font-Cormorant border-l-1 border-(--text)/10 pl-2">
              {menuOpen ? "cerrar" : "menú"}
            </p>
          </button>
        </div>
        <div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className={`mobile-menu transition-transform duration-500 ease-in-out overflow-hidden ${
                menuOpen
                  ? "translate-y-0 opacity-100 max-h-screen"
                  : "-translate-y-full opacity-0 max-h-0"
              }`}
            >
              <p className="">misión</p>
              <p className="">componentes</p>
              <p className="">contacto</p>
              <p className="">acerca de mí</p>

              <div className="flex flex-col gap-2 text-xs ">
                <p>román montes, 26</p>
                <p>ig: @rmg.wav</p>
                <p>web: silentlung.com</p>
                <p>loc: gdl, mx</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
