import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = (props) => {
  const { onPrev, onNext, disabledButtonPrev, disabledButtonNext } = props;

  return (
    <Row className="justify-content-between">
      <Col xs={4} className="text-start">
        <Button
          variant="secondary"
          onClick={onPrev}
          disabled={disabledButtonPrev}
        >
          <BsArrowLeft />
        </Button>
      </Col>
      <Col xs={4} className="text-end">
        <Button
          variant="secondary"
          onClick={onNext}
          disabled={disabledButtonNext}
        >
          <BsArrowRight />
        </Button>
      </Col>
    </Row>
  );
};

export default Pagination;