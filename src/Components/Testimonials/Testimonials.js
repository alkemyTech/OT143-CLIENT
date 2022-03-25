import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Card from "./../Common/Cards";
import axios from "axios";
import service from "./../../Services/testimonialsService";
import moment from "moment";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    service.get().then((res) => {
      console.log(res);
      setTestimonials(res.data.slice(-4));
    });
  }, []);

  return (
    <Container className="d-flex flex-wrap justify-content-center" fluid>
      {testimonials.length !== 0 &&
        testimonials.map((testimony) => {
          return (
            <Card
              title={testimony.name}
              image={testimony.image}
              content={testimony.description}
              id={testimony.id}
              footer={moment(testimony.created_at).format("LL")}
              key={testimony.id}
            />
          );
        })}
    </Container>
  );
};

export default Testimonials;
