import React from "react";
import {
  Form,
  Jumbotron,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import PropTypes from 'prop-types';
import './AddTicketFoem.css'

const AddTicketForm = ({ formDataError, frmData, handleOnChange, handleOnSubmit }) => {
    console.log(frmData)
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <div></div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              onChange={handleOnChange}
            //    minLength="3"
              maxLength="100"
              placeholder="Subject"
              required
            />
            <Form.Text className='text-danger'>
                {formDataError.subject && "SUbject is required!"}

            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>detail</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmData.detail}
            onChange={handleOnChange}
            rows="5"
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddTicketForm.prototype={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    frmData:PropTypes.object.isRequired,
    formDataError:PropTypes.object.isRequired,


}
export default AddTicketForm;
