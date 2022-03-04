import { Placeholder, Col } from "react-bootstrap";

const Skeleton = () => {
  return (
    <Placeholder className="d-flex" animation="wave">
      <Placeholder
        as="h1"
        className=" ms-3 me-4 rounded-circle"
        style={{ width: "100px", height: "100px" }}
      />

      <Col  className="d-flex flex-column justify-content-center">
        <Placeholder className="mb-2 rounded" xs={10} md={6} lg={5} />
        <Placeholder className="mb-2 rounded" xs={7}  md={5} lg={4}/>
        <Placeholder className="mb-2 rounded" xs={5}  md={4} lg={3}/>
        
      </Col>
    </Placeholder>
  );
};

export default Skeleton;
