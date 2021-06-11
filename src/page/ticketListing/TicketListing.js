import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcurm from "../../components/breadcurms/Breadcurm";
import SearchForm from "../../components/searchForm/SearchForm";
import TicketTable from "../../components/ticketTable/TicketTable";
import tickets from "../../assets/data/TicketDummy.json";
import { Link } from "react-router-dom";

const TicketListing = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcurm page="ticket Listing" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/add-ticket">
            <Button variant='info'>Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketListing;
