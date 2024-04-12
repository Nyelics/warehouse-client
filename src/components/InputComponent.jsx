import {Form} from "react-bootstrap";
import PropTypes from "prop-types"; // Import PropTypes

const InputComponent = ({label, name, type, ...rest}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} {...rest} />
    </Form.Group>
  );
};
InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default InputComponent;
