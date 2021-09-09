// React
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

export const Filter = () => {
  // Store

  return (
    <div>
      <Row
        className="justify-content-md-center"
        style={{ textAlign: "center" }}
      >
        <Col xs={12}>
          <h5>Filter on genre</h5>
        </Col>

        <Col
          xs={12}
          className="filter_links"
          onClick={() => console.log('filter all')}
        >
          All
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => console.log('filter romantic')}
        >
          Romantic
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => console.log('filter comedy')}
        >
          History
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => console.log('filter history')}
        >
          Comedy
        </Col>
        
        <Col xs={12} style={{marginTop: '15px'}}>
          <h5>Filter Read/Unread</h5>
        </Col>
        {/* <Col
          xs={12}
          className="filter_links"
          onClick={() => booksStore.filterReadUnread(true)}
        >
          Read
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => booksStore.filterReadUnread(false)}
        > 
          Unread
        </Col> */}
      </Row>
    </div>
  );
};
