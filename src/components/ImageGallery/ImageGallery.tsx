import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ModalWindow, Pictures } from '../../App.types';
import {FC} from 'react';

interface ImageGalleryProps {
  handleOpen: (image: ModalWindow) => void;
  images: Pictures[] | null;
}

const ImageGallery: FC<ImageGalleryProps>= ({ images, handleOpen }) => {
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