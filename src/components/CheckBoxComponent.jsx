import {Field, ErrorMessage} from "formik";
import {Form} from "react-bootstrap";
import PropTypes from "prop-types"; // Import PropTypes

const Checkbox = ({label, name, ...rest}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Check
        type="checkbox"
        id={name}
        label={label}
        {...rest}
        as={Field}
        name={name}
      />
      <ErrorMessage name={name} component="div" className="text-danger" />
    </Form.Group>
  );
};

Checkbox.propTypes = {
  label: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
};

export default Checkbox;
