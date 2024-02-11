import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ items, openModal, setImageModal }) => {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard
            image={item}
            openModal={openModal}
            setImageModal={setImageModal}
          />
        </li>
      ))}
    </ul>
  );
};
