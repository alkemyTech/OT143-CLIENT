import { Placeholder, Card } from "react-bootstrap";

const SkeletonCard = () => {
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
};

export default SkeletonCard;
