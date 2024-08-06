import Modal from "react-modal";
import { FC } from 'react';

interface ImageModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  urls?: string;
  alt?: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ modalIsOpen, closeModal, alt, urls }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <img src={urls} alt={alt} />
    </Modal>
  );
};

export default ImageModal;