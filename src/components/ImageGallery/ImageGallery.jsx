import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard card={item} />
        </li>
      ))}
    </ul>
  );
};
