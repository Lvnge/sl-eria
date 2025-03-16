import GalleryV1 from "../components/gallery_v1/GalleryV1";

const Diseños = () => {
  return (
    <div className="parent-container mt-12">
      <div className="design-section text-center">
        <h1>Diseños</h1>
        <h2>Subtitlo </h2>
      </div>
      <div className="divider"></div>
      <div className="design-section">
        <GalleryV1 />
      </div>
    </div>
  );
};

export default Diseños;
