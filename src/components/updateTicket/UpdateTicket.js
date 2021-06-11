import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <div>
        <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          value={msg}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>

    </div>
  );
};
UpdateTicket.propTypes={
msg:PropTypes.string.isRequired,
handleOnChange:PropTypes.func.isRequired,
handleOnSubmit:PropTypes.func.isRequired


}
export default UpdateTicket;
