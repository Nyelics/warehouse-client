import {Form} from "react-bootstrap";
import PropTypes from "prop-types"; // Import PropTypes

const TextAreaComponent = ({label, name, ...rest}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="textarea" name={name} {...rest} />
    </Form.Group>
  );
};

TextAreaComponent.propTypes = {
  label: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
};

export default TextAreaComponent;
