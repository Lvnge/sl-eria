import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images here
import img1 from "../../assets/image-gallery/galleryv1-test/IMG_1638.jpg";
import img2 from "../../assets/image-gallery/galleryv1-test/IMG_0312.jpg";
import img3 from "../../assets/image-gallery/galleryv1-test/IMG_6612.jpg";
import img4 from "../../assets/image-gallery/galleryv1-test/untitled-6-11.jpg";
// Add more images as needed

// Define image metadata for better accessibility and organization
interface ImageItem {
  src: string;
  alt: string;
  title: string;
  span?: "col" | "row" | "both" | undefined;
}

const GalleryV2 = () => {
  // Gallery items with metadata
  const galleryItems: ImageItem[] = [
    { src: img1, alt: "Gallery image 1", title: "IMG_1638.JPEG", span: "col" },
    { src: img2, alt: "Gallery image 2", title: "IMG_0312.JPEG" },
    { src: img3, alt: "Gallery image 3", title: "IMG_6612.JPEG", span: "row" },
    { src: img4, alt: "Gallery image 4", title: "untitled-6-11.JPEG" },
    // Add more items as needed
  ];

  // State to handle modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Function to open modal with the selected image
  const openModal = (image: ImageItem) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    // Add focus trap and prevent body scroll
    document.body.style.overflow = "hidden";
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";

    // Wait for animation to complete before clearing selected image
    setTimeout(() => {
      setSelectedImage(null);
    }, 500);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <div className="bento-grid" role="region" aria-label="Image gallery">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`bento-item ${item.span ? `span-${item.span}` : ""}`}
            onClick={() => openModal(item)}
            onKeyDown={(e) => e.key === "Enter" && openModal(item)}
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title}`}
          >
            <div className="bento-img-container">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
            <div className="bento-info">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image view */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="modal"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.5 } }}
            role="dialog"
            aria-label="Image viewer"
            aria-modal="true"
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.6 } }}
              />
              <button
                className="close-button"
                onClick={closeModal}
                aria-label="Close image viewer"
                autoFocus
              >
                cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryV2;
