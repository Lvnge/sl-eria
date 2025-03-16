import { motion } from "framer-motion";
import GalleryV1 from "../components/gallery_v1/GalleryV1";

const Diseños = () => {
  return (
    <div className="parent-container mt-12">
      <div className="design-section text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.55 }}
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
        <GalleryV1 />
      </div>
    </div>
  );
};

export default Diseños;
