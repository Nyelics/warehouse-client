import {Modal} from "react-bootstrap";
import PropTypes from "prop-types"; // Import PropTypes

const ModalComponent = ({showModal, closeModal, title, children}) => {
  return (
    <Modal show={showModal} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

ModalComponent.propTypes = {
  showModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default ModalComponent;
