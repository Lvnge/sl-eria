import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="navbar">
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
          {menuOpen && (
            <div className="mobile-menu">
              <p className="">misión</p>
              <p className="">componentes</p>
              <p className="">contacto</p>

              <div className="flex flex-col gap-2 text-sm mt-auto mb-16">
                <p className="text-lg">acerca de mí</p>
                <p>román montes, 26</p>
                <p className="flex">
                  ig:&nbsp;
                  <p className="underline text-(--primary)"> @rmg.wav</p>
                </p>
                <p className="flex">
                  web:&nbsp;
                  <p className="underline text-(--primary)">silentlung.com</p>
                </p>
                <p>loc: gdl, mx</p>
                <p>eng, sp</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
