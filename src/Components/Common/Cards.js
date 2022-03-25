import { Card } from "react-bootstrap";
import "./Cards.scss";
import placeholder from "./../../images/somosMasOrg.png";

const Cards = ({ id, image, title, content, footer, effect, ...props }) => {
  return (
    <Card className={effect ? "card-common card-effect m-5 p-0" : "card-common m-5 p-0" } bg="light" {...props}>
      <Card.Img
        className="card-img"
        variant="top"
        src={!image ? placeholder : image}
      />
      <Card.Title className="card-title px-3 py-2 my-2">{title}</Card.Title>
      <Card.Body className="flex-column h-100 pt-0">
        <Card.Text
          className="card-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></Card.Text>
      </Card.Body>
      {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
    </Card>
  );
};

export default Cards;
