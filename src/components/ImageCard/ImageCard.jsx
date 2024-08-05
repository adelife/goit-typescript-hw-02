import css from "./ImageCard.module.css";

const ImageCard = ({ description, urls, handleOpen }) => {
  return (
    <div className={css.card} onClick={() => handleOpen(urls, description)}>
      <img src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;