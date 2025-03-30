import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GalleryV1 from "../galleries/GalleryV1";
import GalleryV2 from "../galleries/GalleryV2";

import VideosV1 from "../videos/VideosV1";
import VideosV2 from "../videos/VideosV2";

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
    <>
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
                selectedGalleryOption === "seleccionar..."
                  ? "li-placeholder"
                  : ""
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
                selectedVideosOption === "seleccionar..."
                  ? "li-placeholder"
                  : ""
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

      <AnimatePresence>
        {selectedOption === "galerías/" &&
          selectedGalleryOption === "versión 1" && (
            <motion.div
              key="gallery-v1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }} // No delay for exit
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <GalleryV1 />
              </div>
            </motion.div>
          )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedOption === "galerías/" &&
          selectedGalleryOption === "versión 2" && (
            <motion.div
              key="gallery-v2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }} // No delay for exit
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <GalleryV2 />
              </div>
            </motion.div>
          )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedOption === "videos/" &&
          selectedVideosOption === "versión 1" && (
            <motion.div
              key="videos-v1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }} // No delay for exit
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <VideosV1
                  src="/IMG_7459.mp4"
                  poster="/path/to/any-poster.jpg"
                  title="IMG_7459.mp4"
                  orientation="auto"
                  autoPlay={false}
                />
              </div>
            </motion.div>
          )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedOption === "videos/" &&
          selectedVideosOption === "versión 2" && (
            <motion.div
              key="videos-v2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }} // No delay for exit
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <VideosV2 />
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

export default GallerySelector;
