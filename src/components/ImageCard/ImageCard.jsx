import { ImageModal } from "../ImageModal/ImageModal";
import { useState } from "react";
import css from "./ImageCard.module.css";

export const ImageCard = ({ card }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img
        className={css.image}
        src={card.urls.small}
        alt={card.alt_description}
        onClick={() => setIsOpen(true)}
      />
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={() => setIsOpen(false)}
          modalImage={card.urls.regular}
          descr={card.description}
        />
      )}
    </div>
  );
};
