import sl from "../assets/component/silentlung.jpg";
import eria from "../assets/component/sl-eria.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Proyectos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="parent-container"
    >
      <div className="space-y-8 my-8 text-center">
        <h1 className="mt-8">Proyectos</h1>
        <div className="divider"></div>
        <div className="border border-(--text)/10 dark:border-(--d-text)/20 rounded-md ">
          <Link to="https://silentlung.com" target="_blank">
            <div className="flex flex-col items-center rounded-md overflow-hidden">
              <img src={sl} alt="" className="" />
              <p className="font-Cormorant text-2xl rounded-md font-semibold my-4">
                silentlung.com
              </p>
            </div>
          </Link>
          <div className="w-full flex text-start px-4 py-2 border-t-1 border-(--text)/10 dark:border-(--d-text)/20 font-Inconsolata text-sm ">
            <p className="font-extrabold">Descripción:&nbsp;</p>
            <p>Mi portafolio de arte personal.</p>
          </div>
          <div className="w-full flex text-start px-4 py-2 border-t-1 border-(--text)/10 dark:border-(--d-text)/20 font-Inconsolata text-sm">
            <p className="font-extrabold">Hecho con:&nbsp;</p>
            <p>HTML CSS JS PHP</p>
          </div>
          <div className="w-full flex text-start px-4 py-2 border-t-1 border-(--text)/10 dark:border-(--d-text)/20 font-Inconsolata text-sm">
            <p className="font-extrabold">Desarrollado:&nbsp;</p>
            <p>Enero 2024 - Julio 2024</p>
          </div>
        </div>
        <div className="border border-(--text)/10 dark:border-(--d-text)/20 rounded-md ">
          <div className="flex flex-col items-center rounded-md overflow-hidden">
            <img src={eria} alt="" className="" />
            <p className="font-Cormorant text-2xl rounded-md font-semibold my-4">
              sl-eria
            </p>
          </div>
          <div className="w-full flex text-start px-4 py-2 border-t-1 border-(--text)/10 dark:border-(--d-text)/20 font-Inconsolata text-sm ">
            <p className="font-extrabold">Descripción:&nbsp;</p>
            <p>
              Creado para ofrecer servicios de desarrollo web a artistas que
              desean tener un portafolio en línea personalizado.
            </p>
          </div>
          <div className="w-full flex text-start px-4 py-2 border-t-1 border-(--text)/10 dark:border-(--d-text)/20 font-Inconsolata text-sm">
            <p className="font-extrabold">Hecho con:&nbsp;</p>
            <p>REACT TYPESCRIPT TAILWINDCSS </p>
          </div>
          <div className="w-full flex text-start px-4 py-2 border-t-1 border-(--text)/10 dark:border-(--d-text)/20 font-Inconsolata text-sm">
            <p className="font-extrabold">Desarrollado:&nbsp;</p>
            <p>Marzo 2025 - En desarrollo</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Proyectos;
