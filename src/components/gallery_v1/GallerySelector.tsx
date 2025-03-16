import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GallerySelector = () => {
  const fadeTextVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // sl-eria/ states
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("seleccionar...");

  const handleOptionSelect = (option: string) => {
    setShowOptions(false);
    setSelectedOption(option);
  };

  const handleFullReset = () => {
    setSelectedOption("seleccionar...");
    setShowOptions(false);
    setGallerySelectedVersion("seleccionar...");
    setShowGalleryOptions(false);
    setVideosSelectedVersion("seleccionar...");
    setShowVideosOptions(false);
  };

  // Gallery states
  const [selectedGalleryVersion, setGallerySelectedVersion] =
    useState("seleccionar...");
  const [showGalleryOptions, setShowGalleryOptions] = useState(false);
  const handleGallerySelect = (galleryversion: string) => {
    setGallerySelectedVersion(galleryversion);
    setTimeout(() => {
      setShowGalleryOptions(false);
    }, 500);
  };

  // Videos states
  const [selectedVideosVersion, setVideosSelectedVersion] =
    useState("seleccionar...");
  const [showVideosOptions, setShowVideosOptions] = useState(false);
  const handleVideosSelect = (videosversion: string) => {
    setVideosSelectedVersion(videosversion);
    setTimeout(() => {
      setShowVideosOptions(false);
    }, 500);
  };

  return (
    <div className="gallery-selector">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <button onClick={handleFullReset}>sl-eria/</button>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <li
          className={
            selectedOption === "seleccionar..." ? "li-placeholder" : ""
          }
        >
          <button onClick={() => setShowOptions(!showOptions)}>
            <AnimatePresence mode="wait">
              <motion.span
                key={selectedOption}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {selectedOption}
              </motion.span>
            </AnimatePresence>
          </button>
        </li>
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
            >
              {selectedOption !== "galerías/" && (
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.1 }}
                >
                  <button onClick={() => handleOptionSelect("galerías/")}>
                    galerías
                  </button>
                </motion.li>
              )}
              {selectedOption !== "videos/" && (
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.1, delay: 0.05 }}
                >
                  <button onClick={() => handleOptionSelect("videos/")}>
                    videos
                  </button>
                </motion.li>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.ul>

      {selectedOption === "galerías/" && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <li
            className={
              selectedGalleryVersion === "seleccionar..."
                ? "li-placeholder"
                : ""
            }
          >
            <button onClick={() => setShowGalleryOptions(!showGalleryOptions)}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={selectedGalleryVersion}
                  variants={fadeTextVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {selectedGalleryVersion}
                </motion.span>
              </AnimatePresence>
            </button>
          </li>
          <AnimatePresence>
            {showGalleryOptions && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                }}
              >
                {selectedGalleryVersion !== "versión 1" && (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
                  >
                    <button onClick={() => handleGallerySelect("versión 1")}>
                      versión 1
                    </button>
                  </motion.li>
                )}
                {selectedGalleryVersion !== "versión 2" && (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1, delay: 0.05 }}
                  >
                    <button onClick={() => handleGallerySelect("versión 2")}>
                      versión 2
                    </button>
                  </motion.li>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.ul>
      )}

      {selectedOption === "videos/" && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <li
            className={
              selectedVideosVersion === "seleccionar..." ? "li-placeholder" : ""
            }
          >
            <button onClick={() => setShowVideosOptions(!showVideosOptions)}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={selectedVideosVersion}
                  variants={fadeTextVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {selectedVideosVersion}
                </motion.span>
              </AnimatePresence>
            </button>
          </li>
          <AnimatePresence>
            {showVideosOptions && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                }}
              >
                {selectedVideosVersion !== "versión 1" && (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
                  >
                    <button onClick={() => handleVideosSelect("versión 1")}>
                      versión 1
                    </button>
                  </motion.li>
                )}
                {selectedVideosVersion !== "versión 2" && (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1, delay: 0.05 }}
                  >
                    <button onClick={() => handleVideosSelect("versión 2")}>
                      versión 2
                    </button>
                  </motion.li>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  );
};

export default GallerySelector;
