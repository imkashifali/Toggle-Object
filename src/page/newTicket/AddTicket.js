import React, { useState, useEffect } from "react";
import Breadcurm from "../../components/breadcurms/Breadcurm";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/addTicketForm/AddTicketForm";
import { shortText } from "../../utils/validation";

const initialFormat = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  detail:false,
};

const AddTicket = () => {
  const [formData, setformData] = useState(initialFormat);
  const [formDataError, setformDataError] = useState(initialFormError);
  useEffect(() => {}, [formData,formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setformDataError(initialFormError);

    const isSubjectValid = await shortText(initialFormat.subject);

     
      setformDataError({
        ...initialFormError,
        subject: !isSubjectValid,
      });


    console.log("Form Submit REquest Done", formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcurm page="new Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formDataError={formDataError}
            frmData={formData}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
