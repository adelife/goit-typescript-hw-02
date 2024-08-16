import css from "./ImageCard.module.css";
import { ModalWindow, Pictures } from '../../App.types';

interface ImageCardProps {
  handleOpen: (image: ModalWindow) => void;
  description: string;
  urls: ModalWindow['urls'];
}

const ImageCard = ({ description, urls, handleOpen } : ImageCardProps) => {
  return (
    <div className={css.card} onClick={() => handleOpen({urls, description})}>
      <img src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;