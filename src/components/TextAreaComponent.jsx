import {Form} from "react-bootstrap";

const TextAreaComponent = ({label, name, ...rest}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="textarea" name={name} {...rest} />
    </Form.Group>
  );
};

export default TextAreaComponent;
