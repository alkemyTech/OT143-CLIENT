import { Placeholder, Card, Col } from "react-bootstrap";

const Skeleton = ({ mode }) => {
  if (mode === "card") {
    return (
      <Card style={{ width: "18rem" }}>
        <Placeholder animation="glow">
          <Placeholder xs={12} style={{ width: "286px", height: "180px" }} />
        </Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder className="rounded" xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder className="rounded" xs={7} />{" "}
            <Placeholder className="rounded" xs={4} />{" "}
            <Placeholder className="rounded" xs={4} />{" "}
            <Placeholder className="rounded" xs={6} />{" "}
            <Placeholder className="rounded" xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    );
  } else if (mode === "comment") {
    return (
      <Placeholder className="d-flex" animation="glow">
        <Placeholder
          as="h1"
          className=" ms-3 me-4 rounded-circle"
          style={{ width: "70px", height: "70px" }}
        />
        <Col className="d-flex flex-column justify-content-center">
          <Placeholder className="mb-2 rounded" xs={10} md={6} lg={5} />
          <Placeholder className="mb-2 rounded" xs={7} md={5} lg={4} />
          <Placeholder className="mb-2 rounded" xs={5} md={4} lg={3} />
        </Col>
      </Placeholder>
    );
  } else {
    return null;
  }
};

export default Skeleton;
