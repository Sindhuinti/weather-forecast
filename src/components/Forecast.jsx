import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CurrentDay from "./CurrentDay";
import CurrentDayDescription from "./CurrentDayDescription";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../styles.css";

function Forecast({ forecast }) {
  return (
    <Container className="box3">
      <Row>
        <Col xs={12} md={4}>
          <div className="card-title">
            <CurrentDay {...forecast.currentDay} />
          </div>
        </Col>
        <Col xs={12} md={8} className="card-info">
          <CurrentDayDescription forecast={forecast.currentDayDetails} />
        </Col>
      </Row>
    </Container>
  );
}

export default Forecast;
