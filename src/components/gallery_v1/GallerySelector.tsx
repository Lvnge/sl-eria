import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GallerySelector = () => {
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
    setGallerySelectedOption("seleccionar...");
    setShowGalleryOptions(false);
    setVideosSelectedOption("seleccionar...");
    setShowVideosOptions(false);
  };

  // Gallery states
  const [selectedGalleryOption, setGallerySelectedOption] =
    useState("seleccionar...");
  const [showGalleryOptions, setShowGalleryOptions] = useState(false);
  const handleGallerySelect = (galleryversion: string) => {
    setGallerySelectedOption(galleryversion);
    setShowGalleryOptions(false);
  };
  const handleGalleryReset = () => {
    setVideosSelectedOption("seleccionar...");
    setShowVideosOptions(false);
  };

  // Videos states
  const [selectedVideosOption, setVideosSelectedOption] =
    useState("seleccionar...");
  const [showVideosOptions, setShowVideosOptions] = useState(false);
  const handleVideosSelect = (videosversion: string) => {
    setVideosSelectedOption(videosversion);
    setShowVideosOptions(false);
  };
  const handleVideosReset = () => {
    setGallerySelectedOption("seleccionar...");
    setShowGalleryOptions(false);
  };

  return (
    <div className="gallery-selector">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button onClick={handleFullReset}>sl-eria/</button>
      </motion.div>
      {/* Media selector */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1.15, duration: 1 }}
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
                transition={{ duration: 0.3 }}
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
                  <button
                    onClick={() => {
                      handleOptionSelect("galerías/");
                      handleGalleryReset();
                    }}
                  >
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
                  <button
                    onClick={() => {
                      handleOptionSelect("videos/");
                      handleVideosReset();
                    }}
                  >
                    videos
                  </button>
                </motion.li>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.ul>

      {/* galerías */}
      {selectedOption === "galerías/" && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <li
            className={
              selectedGalleryOption === "seleccionar..." ? "li-placeholder" : ""
            }
          >
            <button
              onClick={() => {
                setShowGalleryOptions(!showGalleryOptions);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={selectedGalleryOption}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedGalleryOption}
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
                {selectedGalleryOption !== "versión 1" && (
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
                {selectedGalleryOption !== "versión 2" && (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
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
      {/* videos */}
      {selectedOption === "videos/" && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <li
            className={
              selectedVideosOption === "seleccionar..." ? "li-placeholder" : ""
            }
          >
            <button
              onClick={() => {
                setShowVideosOptions(!showVideosOptions);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={selectedVideosOption}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedVideosOption}
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
                {selectedVideosOption !== "versión 1" && (
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
                {selectedVideosOption !== "versión 2" && (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
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
