import { motion } from "framer-motion";
import Selector from "../components/design_page/Selector";

const Diseños = () => {
  return (
    <div className="parent-container ">
      <div className="design-section text-center">
        <motion.h1
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Diseños
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, delay: 0.65 }}
        className="divider"
      ></motion.div>
      <div className="design-section">
        <div>
          <Selector />
        </div>
      </div>
    </div>
  );
};

export default Diseños;
