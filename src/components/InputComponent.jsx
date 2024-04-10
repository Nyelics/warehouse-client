import {Form} from "react-bootstrap";
import PropTypes from "prop-types"; // Import PropTypes

const InputComponent = ({label, name, type, ref, ...rest}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} ref={ref} {...rest} />
    </Form.Group>
  );
};
InputComponent.propTypes = {
  label: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
  type: PropTypes.func.isRequired,
  ref: PropTypes.func.isRequired,
};
export default InputComponent;
