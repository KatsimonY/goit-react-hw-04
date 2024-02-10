import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
  content: {
    border: "1px solid #2272FF",
    textAlign: "center",
    background: "#282828",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ImageModal = ({ isOpen, onClose, modalImage, descr }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <img className={css.image} src={modalImage} />
        <p className={css.descr}>{descr}</p>
      </Modal>
    </div>
  );
};
