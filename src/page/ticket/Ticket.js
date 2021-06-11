import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import Breadcurm from "../../components/breadcurms/Breadcurm";
import tickets from "../../assets/data/TicketDummy.json";
import MessageHistory from "../../components/messageHistory/MessageHistory";
import UpdateTicket from "../../components/updateTicket/UpdateTicket";
import { useParams } from "react-router-dom";

const ticket = tickets[0];
const Ticket = () => {
  const { tId } = useParams();

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    alert("form submit");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcurm page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          {/* {tId}  */}
          <div className="subject">subject:{ticket.subject}</div>
          <div className="date">date:{ticket.status}</div>
          <div className="status">status:{ticket.addedAt}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      {/* <hr/> */}
      <Row>
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
