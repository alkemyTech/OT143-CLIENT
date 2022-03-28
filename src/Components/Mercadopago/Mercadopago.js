import { Container } from 'react-bootstrap';
import './Mercadopago.scss'

const Mercadopago = () => {
  return (
    <>
      <Container className="d-flex justify-content-center mercadopago-container" fluid>
        <a className="text-decoration-none" href="https://mpago.la/1YzPRbE" target="_blank" rel="noreferrer"><button className="mercadopago-button m-2" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}><span>Donar $100</span></button></a>
        <a className="text-decoration-none" href="https://mpago.la/1S6gDoc" target="_blank" rel="noreferrer"><button className="mercadopago-button m-2" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}><span>Donar $200</span></button></a>
        <a className="text-decoration-none" href="https://mpago.la/1E6VqcN" target="_blank" rel="noreferrer"><button className="mercadopago-button m-2" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}><span>Donar $500</span></button></a>
        <a className="text-decoration-none" href="https://mpago.la/26ECRL1" target="_blank" rel="noreferrer"><button className="mercadopago-button m-2" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}><span>Donar $1000</span></button></a>
      </Container>
    </>

  );
}

export default Mercadopago;