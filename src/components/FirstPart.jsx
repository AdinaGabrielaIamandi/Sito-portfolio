import { Col, Container, Image, Row } from "react-bootstrap";
import Codice from "../images/codice.jpg";
import IoFoto from "../images/fotoMia.jpg";

export const FirstPart = () => {
  return (
    <>
      <Row>
        <Col>
          <Image src={Codice} className="imgCodice" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
          <Image src={IoFoto} className="imgIo" />
        </Col>{" "}
        <Col xs={12} md={6} lg={8} className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="nome fw-bold text-center">IAMANDI ADINA GABRIELA</h1>
          <h3 className="text-center">Jr. Full Stack Developer</h3>
        </Col>
      </Row>
    </>
  );
};
