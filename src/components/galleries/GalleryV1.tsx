import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/image-gallery/galleryv1-test/IMG_1638.jpg";
import img4 from "../../assets/image-gallery/galleryv1-test/IMG_1665.jpg";
import img3 from "../../assets/image-gallery/galleryv1-test/IMG_7233.jpg";
import img2 from "../../assets/image-gallery/galleryv1-test/IMG_0312.jpg";

const GalleryV1 = () => {
  // State to handle modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Function to open modal with the selected image
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <div className="galleryv1">
        <div className="thumbnail" onClick={() => openModal(img1)}>
          <div className="thumbnail-img">
            <img src={img1} alt="IMG_1638" />
          </div>
          <div className="thumbnail-info">IMG_1638.JPEG</div>
        </div>
        <div className="thumbnail" onClick={() => openModal(img2)}>
          <div className="thumbnail-img">
            <img src={img2} alt="IMG_1665" />
          </div>
          <div className="thumbnail-info">IMG_1665.JPEG</div>
        </div>
        <div className="thumbnail" onClick={() => openModal(img3)}>
          <div className="thumbnail-img">
            <img src={img3} alt="IMG_7233" />
          </div>
          <div className="thumbnail-info">IMG_7233.JPEG</div>
        </div>
        <div className="thumbnail" onClick={() => openModal(img4)}>
          <div className="thumbnail-img">
            <img src={img4} alt="IMG_0312" />
          </div>
          <div className="thumbnail-info">IMG_0312.JPEG</div>
        </div>
      </div>

      {/* Modal to display the full-size image */}
      <AnimatePresence>
        {/* Modal to display the full-size image */}
        {isModalOpen && (
          <motion.div
            className="modal"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.5 } }} // Ensuring the exit and entrance animations have the same duration
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.5 } }} // Ensuring the exit and entrance animations have the same duration
            >
              <motion.img
                src={selectedImage}
                alt="Full size"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.6 } }} // Ensuring the exit and entrance animations have the same duration
              />
              <button className="close-button" onClick={closeModal}>
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryV1;
