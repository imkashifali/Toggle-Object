import React from "react";
import { Table } from "react-bootstrap";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const TicketTable = ({ tickets }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row, i) => (
              <tr key={i}>
                <td>{row.id}</td>

                <td>
                  <Link to={`/ticket/${row.id}`}>{row.subject}</Link>
                </td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="danger">No Tickets Here</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};
TicketTable.propTypes = {
  tickets: propTypes.array.isRequired,
};
export default TicketTable;
