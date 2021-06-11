import React from "react";
import propTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";


const LoginForm = ({formSwitcher,handleOnSubmit, handleOnchange, email, pass }) => {
    
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          {/* {error && <Alert variant="danger"></Alert>} */}
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
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
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnchange}
                placeholder="password"
                required
              />
            </Form.Group>

            <Button type="submit">Login</Button>
            {/* {isLoading && <Spinner variant="primary" animation="border" />} */}
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="#" onClick={ () => formSwitcher('reset')}>Forget Password?</a>
        </Col>
      </Row>
      {/* <Row className="py-4">
        <Col>
          Are you new here? <a href="/registration">Register Now</a>
        </Col>
      </Row> */}
    </Container>
  );
};
LoginForm.propTypes = {
  handleOnchange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  pass: propTypes.string.isRequired,
};
export default LoginForm;
