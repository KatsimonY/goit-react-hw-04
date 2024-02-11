import css from "./ImageCard.module.css";

export const ImageCard = ({ image, openModal, setImageModal }) => {
  const handleClick = () => {
    setImageModal(image);
    openModal();
  };

  return (
    <div>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};
