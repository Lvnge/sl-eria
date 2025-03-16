import img1 from "../../assets/image-gallery/galleryv1-test/IMG_1638.jpg";
import img4 from "../../assets/image-gallery/galleryv1-test/IMG_1665.jpg";
import img3 from "../../assets/image-gallery/galleryv1-test/IMG_7233.jpg";
import img2 from "../../assets/image-gallery/galleryv1-test/IMG_0312.jpg";

const GalleryV1 = () => {
  return (
    <>
      <div className="galleryv1">
        <div className="thumbnail">
          <div className="thumbnail-img">
            <img src={img1} alt="" />
          </div>
          <div className="thumbnail-info">IMG_1638.JPEG</div>
        </div>
        <div className="thumbnail">
          <div className="thumbnail-img">
            <img src={img2} alt="" />
          </div>
          <div className="thumbnail-info">IMG_1665.JPEG</div>
        </div>
        <div className="thumbnail">
          <div className="thumbnail-img">
            <img src={img3} alt="" />
          </div>
          <div className="thumbnail-info">IMG_7233.JPEG</div>
        </div>
        <div className="thumbnail">
          <div className="thumbnail-img">
            <img src={img4} alt="" />
          </div>
          <div className="thumbnail-info">IMG_0312.JPEG</div>
        </div>
      </div>

      {/* <div className="galleryv1-comments">
        <div className="add-comment">
          <input
            className="add-comment-input"
            type="text"
            placeholder="Escribe un comentario..."
          />
        </div>
      </div>*/}
    </>
  );
};

export default GalleryV1;
