import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpen }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, color, description, likes, urls }) => {
        return (
          <li key={id}>
            <ImageCard
              color={color}
              description={description}
              likes={likes}
              urls={urls}
              handleOpen={handleOpen}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;