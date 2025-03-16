import { motion } from "framer-motion";
const Mision = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="parent-container mt-12"
    >
      <div className="home-section text-center">
        <h1>Misión</h1>
      </div>
      <div className="divider"></div>
      <div className="mt-8 font-Lato text-justify space-y-4">
        <p>
          La misión de SL-Eria es ofrecer a los artistas una forma accesible y
          personalizada de mostrar su trabajo en línea.
        </p>{" "}
        <p>
          Como desarrollador web y artista, mi objetivo es crear portafolios que
          realmente reflejen la identidad única de cada artista.{" "}
        </p>
        <p>
          Entiendo que cada proyecto es diferente, por lo que me enfoco en
          entender las necesidades de cada cliente para crear una solución a
          medida que les ayude a destacar en el mundo digital.{" "}
        </p>
        <p className="text-end font-Cormorant italic text-lg">- román</p>
      </div>
    </motion.div>
  );
};

export default Mision;
