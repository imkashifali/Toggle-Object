import React from "react";
import "./DashboardPage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/ticketTable/TicketTable";
import tickets from "../../assets/data/TicketDummy.json";
import Breadcurm from "../../components/breadcurms/Breadcurm";
import { Link } from "react-router-dom";
const DashboardPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Breadcurm page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">DASHBOARD</Col>
        <Col>
          <Link to="/add-ticket">
            <Button variant="success" className="buttons">
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total Tickets:69</div>
          <div>Pending Tickets: 12</div>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">Recently Add Tickets</Col>
      </Row>
      <Row>
        <Col className="recently__tickets">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
