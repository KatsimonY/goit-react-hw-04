import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard card={item} />
        </li>
      ))}
    </ul>
  );
};
