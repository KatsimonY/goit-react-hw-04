export const ImageCard = ({ card }) => {
  return (
    <div>
      <img src={card.urls.small} alt={card.alt_description} />
    </div>
  );
};