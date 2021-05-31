import React from "react";
import propTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

const PasswordReset = ({ formSwitcher, handleOnReset, handleOnchange, email }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center"> PasswordReset</h1>
          <hr />
          {/* {error && <Alert variant="danger"></Alert>} */}
          <Form autoComplete="off" onSubmit={handleOnReset}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnchange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>

            <Button type="submit">Reset</Button>
            {/* {isLoading && <Spinner variant="primary" animation="border" />} */}
          </Form>
          <hr />
        </Col>
      </Row>

      <Row className="py-4">
      <Col>
          <a href="#!" onClick={ () => formSwitcher('login')}>Login </a>
        </Col>
      </Row>
    </Container>
  );
};
PasswordReset.propTypes = {
  handleOnchange: propTypes.func.isRequired,
  handleOnReset: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,
  email: propTypes.string.isRequired,

};
export default PasswordReset;
